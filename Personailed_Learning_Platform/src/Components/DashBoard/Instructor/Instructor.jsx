import axios from "axios";
import React, { useState } from "react";
import { url } from "../../../App";
import "./Instructor.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Instructor = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Map course categories/titles to specific images
  const courseImages = {
    "React.js":
      "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
    "Python Programming":
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/10/57202wallpaper.png",
    "Java Programming":
      "https://wp.logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
    "C#": "https://i.ytimg.com/vi/4HD7C1XwSdo/maxresdefault.jpg",
    HTML: "https://wallpaperaccess.com/full/4868338.jpg",
    "CSS (Cascading Style Sheets)":
      "https://tse1.mm.bing.net/th/id/OIP.Mn3-Dzome31rYUCi5rHmaQHaDk?pid=Api&P=0&h=180",
    "Introduction to React Fundamentals":
      "https://wallpaperbat.com/img/860858-react-native-wallpaper.png",
    Default: "https://via.placeholder.com/600x300.png?text=Course+Image",
  };

  // HandlePost
  const HandlePost = () => {
    navigate("/post");
  };

  // Function to fetch courses and lessons on button click
  const handlePosting = async () => {
    try {
      const token = localStorage.getItem("token");

      // Fetch courses
      const courseRes = await axios.get(`${url}Courses/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const courseList =
        courseRes.data.courses || courseRes.data.data?.courses || [];
      setCourses(courseList);

      // Fetch lessons
      const lessonRes = await axios.get(`${url}Lessons/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const lessonList =
        lessonRes.data.Lessons ||
        lessonRes.data.lessons ||
        lessonRes.data.data?.lessons ||
        [];
      setLessons(lessonList);

      console.log("Courses:", courseList);
      console.log("Lessons:", lessonList);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  // Get image based on course title or category
  const getCourseImage = (course) => {
    return (
      courseImages[course.title] ||
      courseImages[course.category] ||
      courseImages.default
    );
  };

  const HandleProgress = () => {
    navigate("/progress");
  };

  return (
    <div className="instructor-dashboard-unique">
      <h2 className="instructor-title-unique">
        Welcome to Instructor Dashboard
      </h2>

      <img
        src="https://flint-international.com/wp-content/uploads/2023/05/ILT-Learning-Pict1.jpg"
        alt=""
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          display: "block",
          margin: "20px auto",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      />
      <div className="instructor-buttons-container-unique">
        <Button
          className="instructor-btn-posting-unique"
          onClick={handlePosting}
        >
          My Posting
        </Button>
        <Button className="instructor-btn-post-unique" onClick={HandlePost}>
          Post A Course
        </Button>
        <Button
          className="instructor-btn-progress-unique"
          onClick={HandleProgress}
        >
          Students Progress
        </Button>
      </div>

      <div className="instructor-courses-container-unique">
        {courses.length === 0 && (
          <p className="instructor-welcome-text-unique">Hello Instructor</p>
        )}

        {courses.map((course) => (
          <div
            key={course._id}
            className="instructor-course-card-unique"
            onClick={() => setSelectedVideo(course.video)}
          >
            <Card className="instructor-card-unique">
              <img
                src={getCourseImage(course)}
                alt={course.title || "Course"}
                className="instructor-course-thumbnail-unique"
              />
              <div className="instructor-course-info-unique">
                <h3 className="instructor-course-title-unique">
                  {course.title || "No title"}
                </h3>
                <p className="instructor-course-category-unique">
                  {course.category || "No category"}
                </p>
              </div>
            </Card>

            {/* Optionally render lessons for this course */}
            {lessons
              .filter(
                (lesson) =>
                  (lesson.course?._id && lesson.course._id === course._id) ||
                  lesson.course === course._id
              )
              .map((lesson) => (
                <div key={lesson._id} className="instructor-lesson-card-unique">
                  <h4 className="instructor-lesson-title-unique">
                    {lesson.title || "Untitled Lesson"}
                  </h4>
                  <p className="instructor-lesson-description-unique">
                    {lesson.description || "No description provided"}
                  </p>

                  {lesson.video && (
                    <Button
                      className="instructor-lesson-video-btn-unique"
                      onClick={() => setSelectedVideo(lesson.video)}
                    >
                      Play Video
                    </Button>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="instructor-video-modal-unique"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="instructor-video-container-unique"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={selectedVideo} controls autoPlay />
            <button
              className="instructor-video-close-btn-unique"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructor;
