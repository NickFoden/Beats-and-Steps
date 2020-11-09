import React from "react";
import classes from "../../styles/assets/video.module.scss";
import TestVideo from "../../assets/video/intro-video.mp4";

const Video = () => {
  return (
    <video autoPlay muted loop controls disablePictureInPicture playsInline="playsInline" className={classes.video} /*width="1920" height="720"*/>
      <source src={TestVideo} type="video/mp4" />
    </video>
  );
};

export default Video;
