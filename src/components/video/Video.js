import React from "react";
import classes from "../../styles/assets/video.module.scss";
import TestVideo from "../../assets/video/test-video.mp4";

const Video = () => {
  return (
    <video autoPlay muted loop className={classes.video}>
      <source src={TestVideo} type="video/mp4" />
    </video>
  );
};

export default Video;
