import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../App";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !username.trim() || !email.trim() || !password.trim() || !role) {
      toast.error("Please fill all fields");
      return;
    }
  // show loading toast instantly
    const loadingToast = toast.loading("Signing in...");
    try {
      const response = await axios.post("https://personalied-learning-platform.onrender.com/auth/signin", {
        name,
        username,
        email,
        password,
        role,
      });
     toast.success("Signup successful!");
      alert("SignUp Successfull")
      const user = response.data.user;
      console.log(user._id)
    localStorage.setItem("id", user._id)
      console.log(response.data);

      toast.update(loadingToast, {
             render: "SignUp Successful 🎉",
             type: "success",
             isLoading: false,
             autoClose: 2000,
             closeOnClick: true,
             draggable: true,
           });
      
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <ToastContainer position="top-right" />
        <Card className="signup-card p-4 shadow" style={{ maxWidth: "450px", width: "100%" }}>
          <div className="signup-avatar text-center mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="avatar"
              style={{ width: "80px" }}
            />
          </div>
          <h3 className="text-center mb-2">Create Your Account</h3>
          <p className="text-center mb-4 text-muted">Join the Personalized Learning Platform</p>

          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              
              </Form.Select>
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" className="signup-btn" variant="primary">
                Sign Up
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
