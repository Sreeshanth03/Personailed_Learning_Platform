import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../../App";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedEnrollment = localStorage.getItem("enrollment");

        // ✅ Just check if string exists
        if (!storedEnrollment) {
          console.warn("No enrollment data found in localStorage");
          return;
        }

        const res = await axios.get(
          `${url}student/courses/${storedEnrollment}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Enrollment ID from localStorage:", storedEnrollment);
        console.log("Fetched Courses:", res.data);

        // Ensure courses is always an array
        setCourses(Array.isArray(res.data) ? res.data : [res.data]);
      } catch (error) {
        console.error(
          "Error fetching courses:",
          error.response?.data || error.message
        );
      }
    };

    fetchCourses();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const HandleQuiz = () => {
    navigate("/Quiz");
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">🎓 Start Your Journey</h2>

      <Row className="g-4">
        {courses.length === 0 && <p>No courses available.</p>}

        {courses.map((course) => (
          <Col key={course._id} xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-4 h-100 border-0">
              {course.video && (
                <video
                  src={course.video}
                  controls
                  className="w-100 rounded-top-4"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}

              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  {course.title?.replace(/"/g, "") || "Untitled Course"}
                </Card.Title>
                <Card.Text className="text-muted small">
                  {course.description?.replace(/"/g, "") ||
                    "No description available."}
                </Card.Text>
                <Card.Text>
                  <strong>Category:</strong>{" "}
                  {course.category?.replace(/"/g, "") || "General"}
                </Card.Text>
                <Card.Text className="text-secondary small">
                  <strong>Created At:</strong>{" "}
                  {course.createdAt ? formatDate(course.createdAt) : "N/A"}
                </Card.Text>
                <Button onClick={HandleQuiz}>Quiz</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentDetails;
