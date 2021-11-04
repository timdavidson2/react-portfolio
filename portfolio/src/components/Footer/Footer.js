import React from "react";
import { GitHub } from "react-share";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex mt-3">
              <p>Montpelier, Virginia</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">804.555.5555</a>
            </div>
            <div className="d-flex mb-3">
              <a href="mailto:timdavidson2@gmail.com">timdavidson2@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
