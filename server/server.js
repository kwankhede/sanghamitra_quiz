const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const dbURI =
  "mongodb+srv://kapilwankhede2204:0GufORnJeKAvtG8A@quizz.dsnaknj.mongodb.net/quizz";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const questionSchema = new mongoose.Schema({
  questionText: String,
  answerChoices: [String],
  correctAnswerIndex: Number,
});

const Question = mongoose.model("Question", questionSchema);

app.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/questions", async (req, res) => {
  const question = new Question({
    questionText: req.body.questionText,
    answerChoices: req.body.answerChoices,
    correctAnswerIndex: req.body.correctAnswerIndex,
  });

  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/questions/:id", async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    res.json(deletedQuestion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/questions/:id", async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      {
        questionText: req.body.questionText,
        answerChoices: req.body.answerChoices,
        correctAnswerIndex: req.body.correctAnswerIndex,
      },
      { new: true }
    );
    res.json(updatedQuestion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//production Script
app.use(express.static("./client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5001;

//production script

app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  return res.sendFile("./client/build/index.html");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
