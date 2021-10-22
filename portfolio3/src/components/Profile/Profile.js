import { Typography } from "@mui/material";
import React from "react";

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
        <img
          className="profile-image"
          src="../../assets/images/selfImage.jpg"
          alt="man on a computer"
        />
      </figure>
      <div className="profile-information">
        Insert Timeline
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
