import React from "react";
import "./Review.css";

const Review = ({ questions, selectedAnswerIndexes, onClose, score }) => {
  const handleClose = () => {
    onClose();
  };

  const renderAnswerChoice = (questionIndex, answerIndex) => {
    const isCorrect =
      answerIndex === questions[questionIndex].correctAnswerIndex;
    const isSelected = answerIndex === selectedAnswerIndexes[questionIndex];

    if (isCorrect && isSelected) {
      return (
        <span className="answer-choice correct">
          <span className="answer-sign">✓</span>
          <span className="answer-text">
            {questions[questionIndex].answerChoices[answerIndex]}
          </span>
        </span>
      );
    } else if (isCorrect) {
      return (
        <span className="answer-choice correct">
          <span className="answer-sign">✓</span>
          <span className="answer-text">
            {questions[questionIndex].answerChoices[answerIndex]}
          </span>
        </span>
      );
    } else if (isSelected) {
      return (
        <span className="answer-choice wrong">
          <span className="answer-sign">×</span>
          <span className="answer-text">
            {questions[questionIndex].answerChoices[answerIndex]}
          </span>
        </span>
      );
    } else {
      return (
        <span className="answer-choice">
          <span className="answer-text">
            {questions[questionIndex].answerChoices[answerIndex]}
          </span>
        </span>
      );
    }
  };

  return (
    <div className="review-container">
      <h1 className="review-header">Quiz Review</h1>
      <h2 className="review-score">{score}</h2>
      {questions.map((question, questionIndex) => (
        <div className="question-container" key={questionIndex}>
          <h3>{`Question ${questionIndex + 1}: ${question.questionText}`}</h3>
          <div className="answer-choices">
            {question.answerChoices.map((answer, answerIndex) => (
              <div className="answer-container" key={answerIndex}>
                {renderAnswerChoice(questionIndex, answerIndex)}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="review-button" onClick={handleClose}>
        Retake Quiz
      </button>
    </div>
  );
};

export default Review;
