import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../../App";
import "./StudentProgress.css"; // Import CSS

const StudentProgress = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedEnrollment = localStorage.getItem("enrollment");

        if (!storedEnrollment) {
          console.warn("No enrollment found in localStorage");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${url}student/courses/${storedEnrollment}/progress`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Student Progress Response:", res.data);

        // Dynamically calculate percentage if totalLessons > 0
        const totalLessons = res.data.totalLessons || 0;
        const completedCount = res.data.completedCount || 0;
        const percentage =
          totalLessons > 0
            ? ((completedCount / totalLessons) * 100).toFixed(2)
            : "0.00";

        setProgress({
          completedLessons: res.data.completedLessons || [],
          totalLessons,
          completedCount,
          percentage,
        });
      } catch (error) {
        console.error(
          "Error fetching progress:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudentProgress();
  }, []);

  if (loading) return <p className="loading">Loading your progress...</p>;

  if (!progress) return <p>No progress data found.</p>;

  return (
    <div className="student-progress-container">
      <h2>My Course Progress</h2>
      <div className="progress-card">
        <div className="progress-row">
          <span>Total Lessons:</span>
          <span>{progress.totalLessons}</span>
        </div>
        <div className="progress-row">
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
                <li key={idx}>{lesson}</li>
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
