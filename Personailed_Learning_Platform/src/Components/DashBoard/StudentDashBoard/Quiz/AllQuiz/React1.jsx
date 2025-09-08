import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const reactQuestions = [
  {
    q: "What is React primarily used for?",
    options: ["Database management", "Building user interfaces", "Server-side scripting", "Networking"],
    answer: "Building user interfaces",
  },
  {
    q: "What is the virtual DOM in React?",
    options: ["A lightweight copy of the real DOM", "A database system", "A server component", "A type of CSS"],
    answer: "A lightweight copy of the real DOM",
  },
  {
    q: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    q: "What is JSX?",
    options: ["A templating engine", "A syntax extension for JavaScript", "A CSS preprocessor", "A database query language"],
    answer: "A syntax extension for JavaScript",
  },
  {
    q: "Which lifecycle method is replaced by useEffect in functional components?",
    options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "All of the above"],
    answer: "All of the above",
  },
];

// Fill up to 50 for demo
while (reactQuestions.length < 50) {
  reactQuestions.push({
    q: `Sample React Question ${reactQuestions.length + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
  });
}

const React1 = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    reactQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    setScore(correct);
    setTimeout(() => {
      navigate("/certificate");
    }, 1000);
  };

  const handleClear = () => {
    setAnswers({});
    setScore(null);
  };

  return (
    <div
      style={{
        padding: "30px",
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
        🔥 React Interview Quiz (50 Questions)
      </h2>

      {reactQuestions.map((q, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "25px",
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "transform 0.2s",
          }}
        >
          <h5 style={{ marginBottom: "15px", color: "#34495e" }}>
            {idx + 1}. {q.q}
          </h5>
          {q.options.map((opt, i) => (
            <label
              key={i}
              style={{
                display: "block",
                marginBottom: "10px",
                cursor: "pointer",
                padding: "10px 12px",
                borderRadius: "8px",
                background: answers[idx] === opt ? "#3498db" : "#f1f3f6",
                color: answers[idx] === opt ? "#fff" : "#333",
                transition: "all 0.2s ease",
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
          gap: "20px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "12px 28px",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d6fa5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          ✅ Submit
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: "12px 28px",
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        >
          🔄 Clear
        </button>
      </div>

      {score !== null && (
        <h3
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#27ae60",
            fontSize: "1.3rem",
          }}
        >
          🎉 You scored {score} out of {reactQuestions.length}
        </h3>
      )}

      {/* Responsive inline styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div { padding: 15px !important; }
            h2 { font-size: 1.6rem !important; }
            h5 { font-size: 1rem !important; }
            button { padding: 10px 20px !important; font-size: 0.9rem !important; }
          }
          @media (max-width: 480px) {
            h2 { font-size: 1.4rem !important; }
            h5 { font-size: 0.95rem !important; }
            button { width: 100% !important; padding: 10px 0 !important; font-size: 0.9rem !important; }
          }
        `}
      </style>
    </div>
  );
};

export default React1;
