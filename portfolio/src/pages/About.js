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
        <div className="col-lg-6 col-xm-12 about-photo pt-5">
          <img src={myImage} alt="Tim" />
        </div>

        <div className="col-lg-6 col-xm-12 about-text">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, my name is Tim and I am a Full Stack Web Developer and U.S.
            Army veteran with a background in military leadership, finance, IT
            Support and Operations with Bachelors of Science in Computer
            Information Systems Networking. I have an understanding of SLAs,
            PoCs, and deadlines.
          </p>
          <p>
            Recently earning certificate from University of Richmond Coding
            Bootcamp, with newly developed skills in HTML5, CSS3, JavaScript,
            Node.js, MongoDB, Bootstrap 5 and responsive web design. Known as an
            innovative problem solver with focus on an impactful user
            experience.
          </p>
          <p>
            I have applied aspects of UX and Agile development in recent
            projects. I have worked with both teams and individually to develop
            several apps. I’m excited to leverage my skills as part of a
            fast-paced, quality-driven team to build better experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
