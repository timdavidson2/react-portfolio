import React from "react";
import Typed from "react-typed";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>full stack web developer / it professional</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "node.js",
            "Bootstrap",
            "MERN",
          ]}
          typeSpeed={150}
          backSpeed={75}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
