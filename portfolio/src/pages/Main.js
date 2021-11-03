import React, { useEffect } from "react";
import { Button } from "react-bootstrap"
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
        <Button className="btn btn-primary btn-resume" href="https://docs.google.com/document/d/1eu0kgkxpH65USzvPFV0rgXfBzpHwA2KhrOXlxZ25Zhk/edit?usp=sharing" target="_blank" alt="Resume download" >Resume</Button>
      </div>
    </div >
  );
};

export default Main;
