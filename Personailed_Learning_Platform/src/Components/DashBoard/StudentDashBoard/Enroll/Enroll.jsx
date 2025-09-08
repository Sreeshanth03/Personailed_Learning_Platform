import React, { useEffect, useState } from "react";
import "./Enroll.css";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../../App";

const Enroll = () => {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);

  const handleBack = () => {
    navigate("/Student");
  };

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${url}student/my-enrollments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEnrollments(res.data); // store enrollments in state
      } catch (error) {
        console.error(
          "Error fetching courses:",
          error.response?.data || error.message
        );
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <Container className="mt-4">
          <Button variant="secondary" onClick={handleBack}>
          <FaBackward /> Back
        </Button>
        
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Enrollments</h2>
      
      </div>

      {enrollments.length === 0 ? (
        <p>No enrollments found.</p>
      ) : (
        <Row className="g-4">
          {enrollments.map((course) => (
            <Col key={course._id} xs={12} md={6} lg={4}>
              <Card className="shadow-sm h-100">
                {course.video && (
                  <video src={course.video} controls className="w-100" />
                )}
                <Card.Body>
                  <Card.Title>{course.title || "Untitled Course"}</Card.Title>
                  <Card.Text>
                    {course.description || "No description"}
                  </Card.Text>
                  <Card.Text>
                    Category: {course.category || "General"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Enroll;
