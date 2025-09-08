import React, { useEffect, useState } from 'react';
import './Progress.css';
import { FaCheckCircle, FaUserGraduate } from 'react-icons/fa';

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MOCK DYNAMIC DATA
    const mockStudents = [
      {
        student: { name: "Alice Johnson", email: "alice@example.com" },
        totalLessons: 12,
        completedLessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
      {
        student: { name: "Bob Smith", email: "bob@example.com" },
        totalLessons: 10,
        completedLessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6"],
      },
      {
        student: { name: "Charlie Brown", email: "charlie@example.com" },
        totalLessons: 8,
        completedLessons: ["Lesson 1", "Lesson 2", "Lesson 3"],
      },
    ];

    // Calculate percentage dynamically
    const updatedData = mockStudents.map((student) => {
      const totalLessons = student.totalLessons || 0;
      const completedCount = student.completedLessons?.length || 0;
      const percentage = totalLessons > 0 ? ((completedCount / totalLessons) * 100).toFixed(2) : "0.00";
      return { ...student, completedCount, percentage };
    });

    setTimeout(() => {
      setProgressData(updatedData);
      setLoading(false);
    }, 1000); // simulate API delay
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
                <tr key={index} className="animated-row">
                  <td>
                    <FaUserGraduate style={{ color: "#3498db", marginRight: "5px" }} />
                    {index + 1}
                  </td>
                  <td>{student.student.name}</td>
                  <td>{student.student.email}</td>
                  <td>
                    {student.completedCount > 0 ? (
                      <ul>
                        {student.completedLessons.map((lesson, i) => (
                          <li key={i}>
                            <FaCheckCircle style={{ color: "#27ae60", marginRight: "5px" }} />
                            {lesson}
                          </li>
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
          <div className="course-image-container">
            <img src="https://www.kindpng.com/picc/m/585-5856121_course-hd-png-download.png" alt="Course" />
          </div>
        </div>
      ) : (
        <p>No progress data found</p>
      )}
    </div>
  );
};

export default Progress;
