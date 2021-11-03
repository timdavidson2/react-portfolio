import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import Typed from "react-typed";
import "../styles/Main.css";

const Main = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>full stack web developer / it professional</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML 5",
            "CSS 3",
            "JavaScript",
            "node.js",
            "Bootstrap",
            "M.E.R.N.",
          ]}
          typeSpeed={175}
          backSpeed={75}
          loop
        />
        <Link className="btn btn-primary btn-resume" to="https://docs.google.com/document/d/1X2gmgqfBeK2g4qnqEi6Id5V-qqmU-mpDWjGbCuO3UqU/edit?usp=sharing" alt="Resume download" >Resume</Link>
      </div>
    </div >
  );
};

export default Main;
