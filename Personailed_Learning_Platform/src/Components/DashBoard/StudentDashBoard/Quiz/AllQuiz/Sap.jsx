import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sap = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const sapQuestions = [
    {
      q: "What is SAP ERP?",
      options: [
        "Enterprise Resource Planning",
        "Enterprise Reporting Program",
        "System Application Program",
        "Standard Application Package",
      ],
      answer: "Enterprise Resource Planning",
    },
    {
      q: "Explain the architecture of SAP.",
      options: ["Two-tier", "Three-tier", "Four-tier", "Single-tier"],
      answer: "Three-tier",
    },
    {
      q: "Difference between SAP ECC and SAP S/4HANA?",
      options: [
        "S/4HANA is cloud-based",
        "ECC is legacy system",
        "S/4HANA uses in-memory DB",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      q: "What are SAP modules?",
      options: [
        "Functional components",
        "Technical components",
        "Middleware",
        "Operating system modules",
      ],
      answer: "Functional components",
    },
    {
      q: "What is SAP FICO?",
      options: [
        "Financial & Controlling module",
        "Forecasting module",
        "File input module",
        "Functional interface module",
      ],
      answer: "Financial & Controlling module",
    },
  ];

  // Fill dummy questions till 25 for demo
  while (sapQuestions.length < 25) {
    sapQuestions.push({
      q: `Sample SAP Question ${sapQuestions.length + 1}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
    });
  }

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    sapQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    setScore(correct);

    setTimeout(() => {
      navigate("/certificate");
    }, 1500);
  };

  const handleClear = () => {
    setAnswers({});
    setScore(null);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        background: "#f7f9fc",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#2c3e50",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "2rem",
        }}
      >
        🏢 SAP Interview Quiz (25 Questions)
      </h2>

      {sapQuestions.map((q, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "transform 0.2s",
          }}
        >
          <h4 style={{ marginBottom: "15px", fontSize: "1.1rem" }}>
            {idx + 1}. {q.q}
          </h4>
          {q.options.map((opt, i) => (
            <label
              key={i}
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "10px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                background: answers[idx] === opt ? "#2c3e50" : "#f1f3f6",
                color: answers[idx] === opt ? "#fff" : "#333",
                transition: "all 0.2s",
              }}
            >
              <input
                type="radio"
                name={`q-${idx}`}
                value={opt}
                checked={answers[idx] === opt}
                onChange={() => handleOptionChange(idx, opt)}
                style={{ marginRight: "10px" }}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "12px 28px",
            background: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: "12px 28px",
            background: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a71d2a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
        >
          Clear
        </button>
      </div>

      {score !== null && (
        <h3
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#333",
            fontSize: "1.3rem",
          }}
        >
          ✅ You scored {score} out of {sapQuestions.length}
        </h3>
      )}

      {/* Responsive inline styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div { padding: 15px !important; }
            h2 { font-size: 1.6rem !important; }
            h4 { font-size: 1rem !important; }
            button { padding: 10px 20px !important; font-size: 0.9rem !important; }
          }
          @media (max-width: 480px) {
            h2 { font-size: 1.4rem !important; }
            h4 { font-size: 0.95rem !important; }
            button { width: 100% !important; padding: 10px 0 !important; font-size: 0.9rem !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Sap;
