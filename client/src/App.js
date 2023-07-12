// import the necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Review from "./components/Review";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const handleFinishQuiz = (score) => {
    setScore(score);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz onFinish={handleFinishQuiz} />} />
          <Route path="/result" element={<Result score={score} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
