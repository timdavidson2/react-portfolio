import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <h1>Contact Page</h1>;
};

export default Contact;
