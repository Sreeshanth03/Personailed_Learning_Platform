import React from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #f0f4ff, #d9e8ff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#0d6efd",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        🚀 Select Your Quiz
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {[
          { name: "React", path: "/react" },
          { name: "Python", path: "/python" },
          { name: "Java", path: "/java" },
          { name: "C", path: "/c" },
          { name: "SAP", path: "/sap" },
        ].map((quiz, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(quiz.path)}
            style={{
              padding: "20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#fff",
              background: "#0d6efd",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "center",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#084298";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#0d6efd";
              e.target.style.transform = "scale(1)";
            }}
          >
            {quiz.name}
          </button>
        ))}
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#333",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        Select any quiz to start practicing and improve your skills. 📚
      </p>
    </div>
  );
};

export default Quiz;
