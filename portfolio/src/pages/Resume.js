import React from "react";
import resume from "../images/resume.docx";

const Resume = () => {
  return (
    <img
      className="error-page"
      src={resume}
      alt="Resume"
      style={{ width: "100%" }}
    />
  );
};

export default Resume;
