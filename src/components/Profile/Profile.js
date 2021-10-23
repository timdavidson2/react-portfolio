import React from "react";
import { Typography } from "@mui/material";

// import CustomTimeline from "../Timeline/Timeline";
import ProfileImage from "../../assets/images/selfImage.jpg";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Timothy</Typography>
        <Typography className="title">
          Web Developer / Software Engineer
        </Typography>
      </div>
      <figure className="profile-image">
        <img src={ProfileImage} alt="man on a computer" />
      </figure>
      <div className="profile-information">
        {/* <CustomTimeline /> */}
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
