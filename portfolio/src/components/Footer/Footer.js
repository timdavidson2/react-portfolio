import React from "react";
import { FaGithub } from "react-icons/fa";
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
          <FaGithub url={"https://github.com/timdavidson2"} size={36} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
