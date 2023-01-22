import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../Assets/CssFiles/LoginForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { apiUrl } from "../../AppServices/AppService";
// import Loader from "../Loader/Loader";
axios.defaults.withCredentials = true;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  
  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const usernameChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const clickHandler = async () => {
    // setIsLoading(true)
    try {
      const data = await axios.post(
        `${apiUrl}/jkegov/user/logIn/`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(data);
      if (data.status === 200) {
        localStorage.setItem("token", data.data.data.token);
        navigate("/dashboard");
      } else {
        setError(true);
        setMessage(data.response.data.message);
      }
    } catch (error) {
      setError(true);
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
    {/* {isLoading&&<Loader />} */}
      <Form
        className=" form mx-4 my-3 px-5 py-3"
        style={{ width: "27%", backgroundColor: "white"}}
        onSubmit={submitHandler}
      >
        <h3 className="login__text mb-5 text-center fw-bold">Login</h3>
        <Form.Group className="login__text mb-4" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            className="box border-bottom border-0 rounded-0"
            type="email"
            placeholder="Email"
            value={email}
            onChange={usernameChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3 login__text" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            className="box border-bottom border-0 rounded-0"
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </Form.Group>

        <Link to="/resetpassword">Forgot Password?</Link>

        <p className="text-danger">{message}</p>
        <div className="d-flex justify-content-center align-items-center">
          <Button
          // disabled={isLoading}
            onClick={clickHandler}
            className=" login__button login__text fw-bold mt-4 mb-4 rounded-pill border-0"
            type="submit"
            style={{ width: "80%" }}
          >
            LOGIN
          </Button>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
