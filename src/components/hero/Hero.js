import React from "react";
import Video from "../video/Video";
import classes from "../../styles/hero/hero.module.scss";

const Hero = () => {
  return (
    <header className={classes.heroSection}>
      <Video />
    </header>
  );
};

export default Hero;
