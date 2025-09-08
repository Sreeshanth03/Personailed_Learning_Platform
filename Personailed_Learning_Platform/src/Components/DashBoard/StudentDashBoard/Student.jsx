import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App";
import "./Student.css"

const Student = () => {
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
  
  const HandleProgress = () => {
    navigate("/StudentProgress")
  }

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
    "HTML": "https://wallpaperaccess.com/full/4868338.jpg",
    "CSS (Cascading Style Sheets)": "https://tse1.mm.bing.net/th/id/OIP.Mn3-Dzome31rYUCi5rHmaQHaDk?pid=Api&P=0&h=180",
    "Introduction to React Fundamentals": "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
    "Default": "https://via.placeholder.com/600x300.png?text=Course+Image"
  };
  
  return (
    <Container className="student-dashboard-container-unique">
      <div className="student-dashboard-header-unique d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h1 className="student-dashboard-title-unique">Student Dashboard</h1>
        <div className="student-dashboard-actions-unique mt-2 mt-md-0">
          <Button className="student-progress-btn-unique me-2" onClick={HandleProgress}>Progress</Button>
          <Button className="student-enrollments-btn-unique me-2" onClick={handleMyEnrollments}>
            My Enrollments
          </Button>
          <Button className="student-logout-btn-unique" variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <Row className="student-courses-row-unique g-4">
        {courses.length === 0 && (
          <p className="student-no-courses-unique">No courses available at the moment.</p>
        )}

        {courses.map((course) => (
          <Col key={course._id} xs={12} sm={6} lg={4}>
            <Card className="student-course-card-unique shadow-sm h-100">
              <Card.Img
                variant="top"
                src={courseImages[course.title] || courseImages["Default"]}
                className="student-course-img-unique"
              />
              <Card.Body className="student-course-body-unique d-flex flex-column">
                <Card.Title className="student-course-title-unique">
                  {course.title || "Untitled Course"}
                </Card.Title>
                <Card.Text className="student-course-desc-unique">
                  {course.description || "No description provided."}
                </Card.Text>
                <Card.Text className="student-course-category-unique">
                  <strong>Category:</strong> {course.category || "General"}
                </Card.Text>
                <Card.Text className="student-course-instructor-unique">
                  <strong>Instructor:</strong>{" "}
                  {course.instructor?.name || "N/A"}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEnrollButton(course._id)}
                  className="student-enroll-btn-unique mt-auto"
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

export default Student;