import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <h1>Portfolio Page</h1>;
};

export default Portfolio;
