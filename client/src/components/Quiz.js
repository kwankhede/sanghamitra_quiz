import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quiz.css"; // Import the CSS file
import Review from "./Review"; // Import the Review component

const Quiz = ({ onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState(
    new Array(10).fill(-1)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    axios.get("https://sanghamitraquiz.azurewebsites.net").then((res) => {
      const questions = res.data;
      const randomQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      setQuestions(randomQuestions);
    });
  }, []);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setSelectedAnswerIndexes([
      ...selectedAnswerIndexes.slice(0, questionIndex),
      answerIndex,
      ...selectedAnswerIndexes.slice(questionIndex + 1),
    ]);
  };

  const handleSubmit = () => {
    const score =
      selectedAnswerIndexes.reduce(
        (totalScore, answerIndex, questionIndex) =>
          totalScore +
          (answerIndex === questions[questionIndex].correctAnswerIndex ? 1 : 0),
        0
      ) +
      "/" +
      questions.length;
    setIsSubmitted(true);
    onFinish(score);
  };

  const isAnswerCorrect = (questionIndex, answerIndex) => {
    return (
      isSubmitted && answerIndex === questions[questionIndex].correctAnswerIndex
    );
  };

  const isAnswerWrong = (questionIndex, answerIndex) => {
    return (
      isSubmitted &&
      answerIndex !== -1 &&
      answerIndex !== questions[questionIndex].correctAnswerIndex
    );
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : isSubmitted ? (
        <Review
          questions={questions}
          selectedAnswerIndexes={selectedAnswerIndexes}
          onClose={handleClose}
        />
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="question-container">
              <h2>{`Question ${index + 1}: ${question.questionText}`}</h2>
              <ul>
                {question.answerChoices.map((answer, answerIndex) => (
                  <li
                    key={answerIndex}
                    className={`answer ${
                      isAnswerCorrect(index, answerIndex)
                        ? "correct"
                        : isAnswerWrong(index, answerIndex)
                        ? "wrong"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`answer-${index}-${answerIndex}`}
                      name={`answer-${index}`}
                      value={answerIndex}
                      checked={selectedAnswerIndexes[index] === answerIndex}
                      onChange={() => handleAnswerChange(index, answerIndex)}
                    />
                    <label htmlFor={`answer-${index}-${answerIndex}`}>
                      {answer}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
