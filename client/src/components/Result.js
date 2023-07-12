import React from "react";

function Result({ score, totalQuestions }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-container">
      <h2>Your Score</h2>
      <p>
        {score} out of {totalQuestions} ({percentage}%)
      </p>
    </div>
  );
}

export default Result;
