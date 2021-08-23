import React from "react";

import classes from "../../styles/components/covid-banner/covid-banner.module.scss";

const CovidBanner = () => {
  return (
    <div className={classes.banner}>
      <p>Due to Covid 19 - All classes are temporarily online only</p>
    </div>
  );
};

export default CovidBanner;
