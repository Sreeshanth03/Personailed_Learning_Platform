import React from "react";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-border">
        <h1 className="certificate-title">Certificate of Achievement</h1>
        <p className="certificate-subtitle">
          Awarded by <span className="platform">Personalized Learning Platform</span>
        </p>

        <div className="certificate-body">
          <h2>Congratulations!</h2>
          <p>
            This certificate is proudly presented to
          </p>
          <h2 className="student-name">[ Student Name ]</h2>
          <p>
            For successfully completing the program with dedication and
            excellence. 🎓
          </p>
        </div>

        <div className="certificate-footer">
          <div className="signature">
            <hr />
            <p>Instructor Signature</p>
          </div>
          <div className="date">
            <hr />
            <p>Date</p>
          </div>
        </div>

        <p className="certificate-wish">✨ All the best for your future! ✨</p>
      </div>
    </div>
  );
};

export default Certificate;
