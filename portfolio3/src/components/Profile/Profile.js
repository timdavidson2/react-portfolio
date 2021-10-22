import { Typography } from "@material-ui/core";
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
        <figure className="profile-image">
          <img
            src={require("../../assets/images/profileImage.png")}
            alt="man on a computer"
          />
        </figure>
        <div className="profile-information">
          Insert Timeline
          <br />
          <button>My Button</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
