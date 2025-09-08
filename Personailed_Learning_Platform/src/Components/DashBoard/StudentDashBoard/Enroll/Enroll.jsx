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
        console.log(res);
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
 const courseImages = {
    "React.js": "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
    "Python Programming": "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/10/57202wallpaper.png",
    "Java Programming": "https://wp.logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
    "C#": "https://i.ytimg.com/vi/4HD7C1XwSdo/maxresdefault.jpg",
    "HTML": "https://wallpaperaccess.com/full/4868338.jpg",
    "CSS (Cascading Style Sheets)": "https://tse1.mm.bing.net/th/id/OIP.Mn3-Dzome31rYUCi5rHmaQHaDk?pid=Api&P=0&h=180",
    "Introduction to React Fundamentals": "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
    "Default": "https://tint.creativemarket.com/Gqcq85XfUpKz4AsRBZoco-KON4PoTXUMT9dqgAeHPFk/width:6250/height:6250/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzEwNi8xMDY4LzEwNjgxNjkvcHJvZ3JhbW1pbmctby5qcGc"
  };
  
  return (
    <Container className="mt-4 enroll-container">
      <Button variant="secondary" onClick={handleBack} className="back-btn">
        <FaBackward /> Back
      </Button>

      <div className="d-flex justify-content-between align-items-center mb-4 header-section">
        <h2 className="enroll-heading">My Enrollments</h2>
      </div>

      {enrollments.length === 0 ? (
        <p className="no-enrollments">No enrollments found.</p>
      ) : (
        <Row className="g-4">
          {enrollments.map((course) => (
            <Col key={course._id} xs={12} md={6} lg={4}>
              <Card className="shadow-sm h-100 enroll-card">
                {course.course?.video && (
                  <video
                    src={course.course.video}
                    controls
                    className="w-100 course-video"
                  />
                )}
                <Card.Body>
                <Card.Img
                              variant="top"
                              src={courseImages[course.title] || courseImages["Default"]}
                              className="student-course-img-unique"
                            />
                  <Card.Title className="course-title">
                    {course.course?.title || "Untitled Course"}
                  </Card.Title>
                  <Card.Text className="course-desc">
                    {course.course?.description || "No description"}
                  </Card.Text>
                  <Card.Text className="course-category">
                    <span>📚 Category:</span>{" "}
                    {course.course?.category || "General"}
                  </Card.Text>
                  <Card.Text className="enrolled-date">
                    🕒 Enrolled At:{" "}
                    {new Date(course.enrolledAt).toLocaleDateString()}
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
