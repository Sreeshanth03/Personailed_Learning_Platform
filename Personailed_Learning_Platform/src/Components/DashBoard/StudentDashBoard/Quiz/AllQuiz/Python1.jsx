import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pythonQuestions = [
  {
    q: "What type of language is Python?",
    options: ["Compiled", "Interpreted", "Assembly", "Machine"],
    answer: "Interpreted",
  },
  {
    q: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: "def",
  },
  {
    q: "What is the correct file extension for Python files?",
    options: [".pyth", ".pt", ".py", ".p"],
    answer: ".py",
  },
  {
    q: "Which data type is immutable in Python?",
    options: ["List", "Set", "Dictionary", "Tuple"],
    answer: "Tuple",
  },
  {
    q: "What does PEP stand for?",
    options: [
      "Python Enhancement Proposal",
      "Python Encrypted Program",
      "Programming Easy Process",
      "Performance Enhancement Protocol",
    ],
    answer: "Python Enhancement Proposal",
  },
];

// Fill up to 50 questions
while (pythonQuestions.length < 50) {
  pythonQuestions.push({
    q: `Sample Python Question ${pythonQuestions.length + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
  });
}

const Python1 = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    pythonQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    setScore(correct);

    // Navigate to certificate after showing score
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
          color: "#007BFF",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "2rem",
        }}
      >
        🐍 Python Interview Quiz (50 Questions)
      </h2>

      {pythonQuestions.map((q, idx) => (
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
                background: answers[idx] === opt ? "#007BFF" : "#f1f3f6",
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
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
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
          ✅ You scored {score} out of {pythonQuestions.length}
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

export default Python1;
