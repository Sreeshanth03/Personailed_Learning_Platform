import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App";
import "../StudentDashBoard/Student.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleMyEnrollments = () => {
    navigate("/enroll");
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${url}student/courses`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCourses(res.data);

        const user = res.data.user;
        if (user) {
          localStorage.setItem("id", user._id);
        }
      } catch (error) {
        console.error(
          "Error fetching courses:",
          error.response?.data || error.message
        );
      }
    };

    fetchCourses();
  }, []);

  const handleEnrollButton = async (courseId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${url}Courses/${courseId}/enroll`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const enrollment = res.data.enrollment.course._id;
      localStorage.setItem("enrollment", enrollment);

      alert("Enrolled successfully!");
      await navigate("/StudentDetails");
    } catch (error) {
      console.error(
        "Error enrolling in course:",
        error.response?.data || error.message
      );
      alert("Already enrolled in this course!");
      await navigate("/StudentDetails");
    }
  };
 const courseImages = {
  "React.js": "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
  "Python Programming": "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/10/57202wallpaper.png",
  "Java Programming": "https://wp.logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
  "C#": "https://i.ytimg.com/vi/4HD7C1XwSdo/maxresdefault.jpg",
  "HTML":"https://wallpaperaccess.com/full/4868338.jpg",
  "CSS (Cascading Style Sheets)":"https://tse1.mm.bing.net/th/id/OIP.Mn3-Dzome31rYUCi5rHmaQHaDk?pid=Api&P=0&h=180",
  "Introduction to React Fundamentals":"https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
  "Default": "https://via.placeholder.com/600x300.png?text=Course+Image"
};
  return (
    <Container className="dashboard-container">
      <div className="dashboard-header d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <div className="dashboard-actions mt-2 mt-md-0">
          <Button className="me-2" onClick={handleMyEnrollments}>
            My Enrollments
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <Row className="g-4">
        {courses.length === 0 && (
          <p className="no-courses">No courses available at the moment.</p>
        )}

        {courses.map((course) => (
          <Col key={course._id} xs={12} sm={6} lg={4}>
            <Card className="course-card shadow-sm h-100">
              {/* ✅ Add course image or fallback */}
              {/* <Card.Img
                variant="top"
                src={
                  course.image ||
                 "https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg"
                }
                className="course-img"
              /> */}
              <Card.Img
  variant="top"
  src={courseImages[course.title] || courseImages["Default"]}
  className="course-img"
/>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="course-title"style={{color:"whitesmoke"}}>
                  {course.title || "Untitled Course"}
                </Card.Title>
                <Card.Text className="course-desc"style={{color:"whitesmoke"}}>
                  {course.description || "No description provided."}
                </Card.Text>
                <Card.Text className="course-category"style={{color:"whitesmoke"}}>
                  <strong>Category:</strong> {course.category || "General"}
                </Card.Text>
                <Card.Text className="course-instructor"style={{color:"whitesmoke"}}>
                  <strong>Instructor:</strong>{" "}
                  {course.instructor?.name || "N/A"}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEnrollButton(course._id)}
                  className="mt-auto enroll-btn"
                >
                  Enroll
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentDashboard;
