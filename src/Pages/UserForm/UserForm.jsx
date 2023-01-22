import Sidebar from "../Dashboard/Sidebar";
import DashboardHeader from "../Dashboard/DashboardHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../Assets/CssFiles/UserForm.css";
import { useState } from "react";
import { apiUrl } from "../../AppServices/AppService";
import axios from "axios";
import Footer from "../Login/Footer";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const nameHandler = (e) => {
    setFullName(e.target.value);
    setIsEdit(true);
  };
  const designationHandler = (e) => {
    setDesignation(e.target.value);
    setIsEdit(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setIsEdit(true);
  };
  const usernameHandler = (e) => {
    setUserName(e.target.value);
    setIsEdit(true);
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
    setIsEdit(true);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setIsEdit(true);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
    setIsEdit(true);
  };
  const departmentHandler = (e) => {
    setDepartment(e.target.value);
    setIsEdit(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("HIT");
      const data = await axios.post(
        `${apiUrl}/jkegov/user/createUser`,
        {
          name: fullName,
          email: email,
          designation: designation,
          username: username,
          password: password,
          phoneNo: mobile,
          role: "admin",
        },
        { withCredentials: true }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-0 m-0" style={{ backgroundColor: "#F1F6F5" }}>
        <div className=" w-100 h-100">
          <DashboardHeader />
          <div className="main d-flex flex-row m-0 p-0 w-100 h-100">
            <Sidebar />
            <div className=" py-3 px-4 w-100">
              <h5 className="p-0 m-0 fw-bold">Add Users</h5>
              <div className="mt-2 ">
                <Form
                  className="rounded-4 px-4 py-4 m-auto shadow"
                  onSubmit={submitHandler}
                  style={{ width: "39%", backgroundColor: "white" }}
                >
                  <div className="d-flex flex-row gap-3 justify-content-evenly">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter full name"
                        onChange={nameHandler}
                        value={fullName}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter designation"
                        onChange={designationHandler}
                        value={designation}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex gap-3 flex-row justify-content-evenly">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        onChange={emailHandler}
                        value={email}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Username"
                        onChange={usernameHandler}
                        value={username}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex gap-3 flex-row justify-content-evenly">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        required
                        type="tel"
                        placeholder="Enter mobile number"
                        onChange={mobileHandler}
                        value={mobile}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        onChange={passwordHandler}
                        value={password}
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex gap-3 flex-row justify-content-evenly">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Role</Form.Label>
                      <Form.Select onChange={roleHandler} value={role}>
                        <option>Select</option>
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                        <option>Level 4</option>
                        <option>Level 5</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Department</Form.Label>
                      <Form.Select
                        onChange={departmentHandler}
                        value={department}
                      >
                        <option>Select</option>
                        <option>BADP</option>
                        <option>CSC</option>
                        <option>PWD</option>
                        <option>PHE</option>
                        <option>HOME</option>
                        <option>PDD</option>
                        <option>SW</option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className=" w-100 mt-2 d-flex justify-content-center">
                    <Button
                      type="submit"
                      className="save_btn rounded-pill"
                      onClick={submitHandler}
                      style={{ width: "50%" }}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* 
      <div className="border border-success w-100 justify-content-around d-flex flex-row ">
        <Sidebar />
        <div className=" border border-success w-100 shadow">
          <Form
            className="border border-danger px-4 py-5 m-auto"
            onSubmit={submitHandler}
          >
            <div className="border d-flex flex-row justify-content-evenly">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  onChange={nameHandler}
                  value={fullName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  onChange={designationHandler}
                  value={designation}
                />
              </Form.Group>
            </div>
            <div className="border d-flex flex-row justify-content-evenly">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={emailHandler}
                  value={email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  onChange={usernameHandler}
                  value={username}
                />
              </Form.Group>
            </div>
            <div className="border d-flex flex-row justify-content-evenly">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter mobile number"
                  onChange={mobileHandler}
                  value={mobile}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={passwordHandler}
                  value={password}
                />
              </Form.Group>
            </div>
            <div className="border d-flex flex-row justify-content-evenly">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Role</Form.Label>
                <Form.Select onChange={roleHandler} value={role}>
                  <option>Select</option>
                  <option>Level 1</option>
                  <option>Level 2</option>
                  <option>Level 3</option>
                  <option>Level 4</option>
                  <option>Level 5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Department</Form.Label>
                <Form.Select onChange={departmentHandler} value={department}>
                  <option>Select</option>
                  <option>BADP</option>
                  <option>CSC</option>
                  <option>PWD</option>
                  <option>PHE</option>
                  <option>HOME</option>
                  <option>PDD</option>
                  <option>SW</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className=" w-100 border mt-5 d-flex justify-content-center">
              <Button
                type="submit"
                className="save_btn"
                onClick={submitHandler}
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div> */}
    </>
  );
};
export default UserForm;
