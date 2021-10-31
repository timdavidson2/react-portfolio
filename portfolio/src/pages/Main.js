import React from "react";
import Typed from "react-typed";
import "../styles/Main.css";

const Main = () => {
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
      </div>
    </div>
  );
};

export default Main;
