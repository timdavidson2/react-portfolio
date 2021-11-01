import React from "react";
import { Chrono } from "react-chrono";

const Experience = () => {
  const items = [
    {
      title: "May 2021 - Present",
      cardTitle: "University of Richmond Coding Bootcamp,   Richmond, Va.",
      cardSubtitle: "Full Time Student",
      cardDetailedText:
        "Attended rigorous 24-week boot camp delivered through high-quality coursework and live, online classes led by instructors who are fully vetted by the university. Learned fundamental concepts of web development, including HTML, CSS, and JavaScript. Worked with servers, databases, and other back end technologies, such as MySQL database and Node.js. Grew skills using NoSQL databases, converted traditional applications into progressive web applications, and learned React. ",
    },

    {
      title: "April 2019-March 2020",
      cardTitle: "CarMax, Glen Allen, Va.",
      cardSubtitle: "EUC Engineer (Contractor)",
      cardDetailedText:
        "Imaged new laptops and PCs to test for use in the enterprise environment. Created, deployed, and supported applications with the KACE system as requested with ServiceNow. Create PowerShell scripts for support of KACE deployed applications. Participated in daily, weekly and monthly Agile Scrum Sessions to explain work process.",
    },
    {
      title: "September 2018-April 2019",
      cardTitle: "Dominion Energy, Richmond, Va.",
      cardSubtitle: "Sr. LAN Administator (Contractor)",
      cardDetailedText:
        "Imaged new laptops and PCs to test for use in the enterprise environment. Created, deployed, and supported applications with the KACE system as requested with ServiceNow. Create PowerShell scripts for support of KACE deployed applications. Participated in daily, weekly and monthly Agile Scrum Sessions to explain work process.",
    },
    {
      title: "May 2016-April 2018",
      cardTitle: "Union Bank & Trust, Ruther Glen, Va.",
      cardSubtitle: "IT Operations Specialist",
      cardDetailedText: "",
    },
  ];
  return (
    <>
      <div className="container experience-wrapper">
        <h1>Experience Page</h1>
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono items={items} enableOutline mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
    </>
  );
};

export default Experience;
