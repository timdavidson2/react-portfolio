import React from "react";
import errorPage from "../images/404Page.jpeg";
const NotFound = () => {
  return (
    <img
      className="error-page"
      src={errorPage}
      alt="404 Error Page Not Found"
      style={{ width: "100%" }}
    />
  );
};

export default NotFound;
