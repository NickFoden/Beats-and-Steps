import React from "react";
import Video from "./Video";
import classes from "../../styles/pages/homePage/hero.module.scss";

const Hero = () => {
  return (
    <header className={classes.heroSection}>
      <Video />
    </header>
  );
};

export default Hero;
