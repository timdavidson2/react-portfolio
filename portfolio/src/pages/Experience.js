import React from "react";
import { Chrono } from "react-chrono";
import "../styles/Experience.css";

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
        "Tested applications being deployed with new SCCM CB for errors that would cause diruption to power plants or distribution grid. Refactored applications to run on SCCM CB from SCCM 2012.Provided 3rd level support as requested by ServiceNow ticket. ",
    },
    {
      title: "June 2016-September 2018",
      cardTitle: "Union Bank & Trust, Ruther Glen, Va.",
      cardSubtitle: "IT Operations Specialist",
      cardDetailedText: "Managed the enterprise IT equipment and asset deployment by tracking with asset management system. Conducted periodic inventory checks at many locations across Virginia. Created pc images, imaged PCs and laptops, tested for security and functionality. Worked with IT Security department to remediate top 10 security events per Nexpose Rapid 7 report.   ",
    },
    {
      title: "May 2014-June 2016",
      cardTitle: "Virginia College, Richmond, Va.",
      cardSubtitle: "Director of Network Technician Program",
      cardDetailedText: "Acted as the department head with 2 insrtuctors below me. Ensured that all teaching qualifications met the needed requirements of state regulations provided. Worked with the recruiting department to increase student count. Raised the program retention and new student recruiting from 22% to 80%.",
    },
    {
      title: "November 2013-May 2014",
      cardTitle: "BellTechlogix, Richmond, Va.",
      cardSubtitle: "Lead Deployment Technician on Atria Win7 refresh project",
      cardDetailedText: "Trained 10 new team members to image, QA/QC and deploy PCs, laptops and tablets. Arranged for the deployment of 6,000 machines to the employees. Coordinated travel to locations in Virginia, Tennesee, Kentucky and Illinois. Supervised the deployment to assist in troubleshooting the transfer of data and software. Accounted for the placement of the new machine and return of the old one in an Excel spreadsheet that I created to use formulas to ensure proper asset management.",
    },
    {
      title: "May 2012-November 2013",
      cardTitle: "Va. Department of Medical Assistance Services, Richmond, Va.",
      cardSubtitle: "Systems Analyst II (Contractor)",
      cardDetailedText: "Acted as central point of contact between DMAS and VITA. Ensured that the employees understood the process of getting service and support from VITA. Worked with VITA to ensure the availabilty of equipment to service and provide temporary replacement to employee. Escalated any sensitive issues to the Information Systems manager. Monitored the monthly VITA buget to ensure that no charges for unused equipment.",
    },
    {
      title: "May 2011-May 2012",
      cardTitle: "Wells Fargo, Richmond, Va.",
      cardSubtitle: "Help Desk (Contractor)",
      cardDetailedText: "Acted as initial IT support contact for the 45,000 financial services representives. Worked with customer to fix issues and escalated issues to next level support. Assited customers with software updates and hardware replacement services. ",
    },
    {
      title: "October 1998-May 2011",
      cardTitle: "Boyette Insurance Agency Inc., Richmond, Va.",
      cardSubtitle: "Financial Registered Representative",
      cardDetailedText: "Worked with customers to achieve retirement financial goals, retirement goals and investment plans. Managed over $20 million in customer funds.",
    },
  ];
  return (
    <>
      <div className="container experience-wrapper">
        <h1 className="experience-heading">experience</h1>
        <hr />
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono items={items} enableOutline mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
    </>
  );
};

export default Experience;
