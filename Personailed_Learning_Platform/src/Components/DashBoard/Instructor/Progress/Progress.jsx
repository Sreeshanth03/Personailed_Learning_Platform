import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../../../App';
import './Progress.css';

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedEnrollment = localStorage.getItem("enrollment");

        if (!storedEnrollment) {
          console.warn("No enrollment found in localStorage");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${url}Courses/${storedEnrollment}/progress`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = res.data || [];

        // Dynamically calculate percentage if not provided
        const updatedData = data.map((student) => {
          const totalLessons = student.totalLessons || 0;
          const completedCount = student.completedLessons?.length || 0;
          const percentage = totalLessons > 0 ? ((completedCount / totalLessons) * 100).toFixed(2) : "0.00";

          return {
            ...student,
            completedCount,
            percentage,
          };
        });

        setProgressData(updatedData);
      } catch (error) {
        console.error("Error fetching progress:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) return <p className="loading">Loading student progress...</p>;

  return (
    <div className="progress-container">
      <h2 className="title">Students Progress</h2>
      {progressData.length > 0 ? (
        <div className="table-wrapper">
          <table className="progress-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Completed Lessons</th>
                <th>Total Lessons</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {progressData.map((student, index) => (
                <tr key={student.student._id || index}>
                  <td>{index + 1}</td>
                  <td>{student.student.name}</td>
                  <td>{student.student.email}</td>
                  <td>
                    {student.completedCount > 0 ? (
                      <ul>
                        {student.completedLessons.map((lesson, i) => (
                          <li key={i}>{lesson}</li>
                        ))}
                      </ul>
                    ) : (
                      '0'
                    )}
                  </td>
                  <td>{student.totalLessons}</td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-filled"
                        style={{ width: `${student.percentage}%` }}
                      >
                        {student.percentage}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No progress data found</p>
      )}
    </div>
  );
};

export default Progress;
