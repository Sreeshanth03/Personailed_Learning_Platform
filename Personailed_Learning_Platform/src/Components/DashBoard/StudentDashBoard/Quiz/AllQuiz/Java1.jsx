import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const javaQuestions = [
  {
    q: "What is Java primarily used for?",
    options: ["Web development", "Mobile development", "Enterprise applications", "All of the above"],
    answer: "All of the above",
  },
  {
    q: "Which company originally developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
    answer: "Sun Microsystems",
  },
  {
    q: "Which of these is not a Java feature?",
    options: ["Object-Oriented", "Platform Independent", "Pointer support", "Robust"],
    answer: "Pointer support",
  },
  {
    q: "Which keyword is used to inherit a class in Java?",
    options: ["this", "super", "extends", "implements"],
    answer: "extends",
  },
  {
    q: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    answer: "false",
  },
  {
    q: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "init()", "run()"],
    answer: "main()",
  },
  {
    q: "Which access modifier makes members accessible only within the same package?",
    options: ["public", "private", "protected", "default"],
    answer: "default",
  },
  {
    q: "Which keyword is used to prevent method overriding?",
    options: ["static", "final", "const", "volatile"],
    answer: "final",
  },
  {
    q: "Which collection class allows key-value pairs and maintains insertion order?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
    answer: "LinkedHashMap",
  },
  {
    q: "Which of these is a marker interface in Java?",
    options: ["Serializable", "Cloneable", "Remote", "All of the above"],
    answer: "All of the above",
  },
];

// Fill until 25 questions for demo
while (javaQuestions.length < 25) {
  javaQuestions.push({
    q: `Sample Java Question ${javaQuestions.length + 1}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
  });
}

const Java1 = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    javaQuestions.forEach((q, idx) => {
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
          color: "#d63384",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "2rem",
        }}
      >
        ☕ Java Interview Quiz (25 Questions)
      </h2>

      {javaQuestions.map((q, idx) => (
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
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                background: answers[idx] === opt ? "#d63384" : "#f1f3f6",
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
          ✅ You scored {score} out of {javaQuestions.length}
        </h3>
      )}
    </div>
  );
};

export default Java1;
