import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cQuestions = [
  {
    q: "Who is the founder of the C programming language?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: "Dennis Ritchie",
  },
  {
    q: "Which of the following is a valid C variable name?",
    options: ["1variable", "variable_1", "variable-1", "int"],
    answer: "variable_1",
  },
  {
    q: "Which header file is used for input and output in C?",
    options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<conio.h>"],
    answer: "<stdio.h>",
  },
  {
    q: "What is the size of an int data type (commonly on 32-bit systems)?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    answer: "4 bytes",
  },
  {
    q: "Which operator is used to access the value at the address stored in a pointer?",
    options: ["&", "*", "->", "%"],
    answer: "*",
  },
];

// Fill remaining up to 25
while (cQuestions.length < 25) {
  cQuestions.push({
    q: `Sample C Question ${cQuestions.length + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
  });
}

const C1 = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    cQuestions.forEach((q, idx) => {
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
          color: "#0d6efd",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "2rem",
        }}
      >
        ⚡ C Programming Interview Quiz (25 Questions)
      </h2>

      {cQuestions.map((q, idx) => (
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
                background: answers[idx] === opt ? "#0d6efd" : "#f1f3f6",
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
            background: "#198754",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#145c37")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#198754")}
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
          ✅ You scored {score} out of {cQuestions.length}
        </h3>
      )}
    </div>
  );
};

export default C1;
