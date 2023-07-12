import React from "react";
import "./Home.css"; // import the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS

function Home() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quizzes">
                Quiz
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container my-5">
        <h1 className="text-center">Welcome to Sanghamitra Quiz App</h1>

        <div className="jumbotron text-center my-5">
          <h2>Ready to Test Your Knowledge?</h2>
          <a className="btn btn-primary btn-lg mt-3" href="/quiz" role="button">
            Start Quiz
          </a>
        </div>

        <div className="container my-5">
          <h2>About Sanghamitra Quiz App</h2>
          <p>
            We, as a Sangh of young Bahujan students, are committed to providing
            engaging and educational content covering a wide range of topics,
            beginning with Mathematics and English. Our mission is to make
            quality education accessible to all. Come, join us on our mission to
            democratize quality education for all. At our platform, we strive to
            uphold Babasaheb's vision that the cultivation of the mind should be
            the ultimate aim of human existence.
          </p>
        </div>
      </div>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <p className="text-center">&copy; 2023 Sanghamitra Quiz App</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
