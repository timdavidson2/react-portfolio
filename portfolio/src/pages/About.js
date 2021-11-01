import React, { useEffect } from "react";
import "../styles/About.css";
import myImage from "../images/myPhoto.jpeg";
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12 about-photo">
          <img src={myImage} alt="Tim" />;
        </div>
        <div className="col-lg-6 col-xm-12"></div>
      </div>
    </div>
  );
};

export default About;
