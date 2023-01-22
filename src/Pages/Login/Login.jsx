// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <>
      <div className="d-flex flex-column w-100 h-100" style={{backgroundColor: "#F1F6F5"}}>
        <Header />
        <Container className=" w-100 d-flex flex-column justify-content-center align-items-center px-4">
          <LoginForm />
        </Container>
        <Footer />
      </div>
    </>
  );
};
export default Login;
