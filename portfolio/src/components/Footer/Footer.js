import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow, FaWpforms } from "react-icons/fa";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">

        {/* <div className="row"> */}
        <div className=" address-text">
          <div className=" mt-3">
            <p>Montpelier, Virginia</p>
          </div>
          <div className="phone">
            <a href="tel:555-555-5555">804.555.5555</a>
          </div>
          <div className="email mb-3">
            <a href="mailto:timdavidson2@gmail.com">timdavidson2@gmail.com</a>
          </div>
        </div>
        <div className="mt-5 icon-image">
          <a href="https://github.com/timdavidson2" alt="github" target="_blank" rel="noreferrer" > <FaGithub size={36} /></a>
        </div>
        <div className="mt-5 icon-image">
          <a href="https://www.linkedin.com/in/tim-davidson-98a20112/" alt="linked in" target="_blank" rel="noreferrer" ><FaLinkedin size={36} /></a>
        </div>
        <div className="mt-5 icon-image">
          <a href="https://stackoverflow.com/" alt="stack overflow" target="_blank" rel="noreferrer" ><FaStackOverflow size={36} /></a>
        </div>
        <div className="mt-5 icon-image">
          <a href="https://docs.google.com/document/d/1eu0kgkxpH65USzvPFV0rgXfBzpHwA2KhrOXlxZ25Zhk/edit?usp=sharing" alt="stack overflow" target="_blank" rel="noreferrer" ><FaWpforms size={36} />Resume</a>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
