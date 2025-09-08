import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { data, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const HandleSignUp = () => {
    navigate("/Signup");
  };

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      toast.error("Please Fill All The Details");
      return;
    }

    // show loading toast instantly
    const loadingToast = toast.loading("Logging in... Please Wait It May Take Time");

    try {
      const datalogin = await axios.post(
        "https://personalied-learning-platform.onrender.com/auth/login",
        { email: Email, password: Password }
        
      );
   // Store the token in localStorage
    localStorage.setItem("token", datalogin.data.accesstoken);
    localStorage.setItem("id",datalogin.data._id)
      // localStorage.setItem(datalogin.data.token)
console.log("success")
      console.log(datalogin.data);

      // update toast to success
      toast.update(loadingToast, {
        render: "Login Successful 🎉",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
      });

      localStorage.setItem("user", JSON.stringify(datalogin.data.name));
      navigate(`/${role}`);
    } catch (error) {
      console.error(error);

      // update toast to error
      toast.update(loadingToast, {
        render: "Login Failed! Check credentials ❌",
        type: "error",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="login-page">
      <Container>
        <ToastContainer position="top-right" />
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={4}>
            <Card className="login-card shadow-lg">
              <Card.Body>
                <div className="text-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Learning Logo"
                    className="login-logo"
                  />
                  <h3 className="mb-3">Welcome Back</h3>
                  <p className="text-muted">Login to continue learning</p>
                </div>
                <Form onSubmit={HandleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => SetEmail(e.target.value)}
                      value={Email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={Password}
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="Student">Student</option>
                      <option value="Instructor">Instructor</option>
                      <option value="Admin">Admin</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="d-grid">
                    {/* ✅ removed onClick here */}
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>

                  <div className="new-user-section text-center mt-4">
                    <h6 className="mb-2 text-muted">New User?</h6>
                    <Button
                      variant="outline-primary"
                      className="signup-btn"
                      onClick={HandleSignUp}
                    >
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
