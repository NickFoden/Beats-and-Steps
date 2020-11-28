import React from "react";
import classes from "../../styles/home page/video.module.scss";
import TestVideo from "../../assets/video/intro-video.mp4";

const Video = () => {
  return (
    <video autoPlay muted loop controls disablePictureInPicture playsInline="playsInline" className={classes.video}>
      <source src={TestVideo} type="video/mp4" />
      <p>Your browser doesn't support HTML5 video</p>
    </video>
  );
};

export default Video;
