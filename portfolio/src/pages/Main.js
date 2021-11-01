import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link
          to="/Resume"
          className="btn btn-primary  btn-lg btn-resume px-4"
          role="button"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Main;
