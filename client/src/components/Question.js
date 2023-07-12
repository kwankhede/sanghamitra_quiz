import React, { useState } from "react";
import "./Question.css";

const Question = ({ question, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const handleAnswerChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    onAnswerSelected(selectedAnswer);
  };

  return (
    <div className="question">
      <h2>{question.questionText}</h2>
      <ul>
        {question.answerChoices.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name={`question-${question.id}-answer`}
              value={index}
              onChange={() => handleAnswerChange(index)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Question;
