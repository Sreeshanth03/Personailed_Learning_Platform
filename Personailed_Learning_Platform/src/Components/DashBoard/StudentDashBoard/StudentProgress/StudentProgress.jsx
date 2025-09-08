import React, { useEffect, useState } from "react";
import "./StudentProgress.css"; // Import CSS
import { FaCheckCircle, FaBook } from "react-icons/fa"; // Icons
// Placeholder image

const StudentProgress = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MOCK DATA
    const mockData = {
      totalLessons: 12,
      completedCount: 7,
      completedLessons: [
        "Introduction to React",
        "Components & Props",
        "State Management",
        "Event Handling",
        "Conditional Rendering",
        "Forms & Inputs",
        "Hooks Basics",
      ],
    };

    const percentage =
      mockData.totalLessons > 0
        ? ((mockData.completedCount / mockData.totalLessons) * 100).toFixed(2)
        : "0.00";

    setTimeout(() => {
      setProgress({
        ...mockData,
        percentage,
      });
      setLoading(false);
    }, 1000); // Simulate API delay
  }, []);

  if (loading) return <p className="loading">Loading your progress...</p>;

  if (!progress) return <p>No progress data found.</p>;

  return (
    <div className="student-progress-container">
      <h2>My Course Progress</h2>
      <div className="progress-card">
        <img src="https://www.kindpng.com/picc/m/585-5856121_course-hd-png-download.png" alt="Course" className="course-img" />
        <div className="progress-row">
          <FaBook className="icon" />
          <span>Total Lessons:</span>
          <span>{progress.totalLessons}</span>
        </div>
        <div className="progress-row">
          <FaCheckCircle className="icon completed" />
          <span>Completed Lessons:</span>
          <span>{progress.completedCount}</span>
        </div>
        <div className="progress-row">
          <span>Percentage:</span>
          <span>{progress.percentage}%</span>
        </div>

        {progress.completedLessons.length > 0 && (
          <div className="completed-lessons">
            <h4>Completed Lessons</h4>
            <ul>
              {progress.completedLessons.map((lesson, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="icon-list" /> {lesson}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${progress.percentage}%` }}
          >
            {progress.percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
