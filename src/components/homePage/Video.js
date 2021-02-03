import React from "react";

import TestVideo from "../../assets/video/intro-video.mp4";
import classes from "../../styles/pages/homePage/video.module.scss";

const Video = () => {
  return (
    <video autoPlay muted loop controls disablePictureInPicture playsInline="playsInline" className={classes.video}>
      <source src={TestVideo} type="video/mp4" />
      <p>Your browser doesn't support HTML5 video</p>
    </video>
  );
};

export default Video;
