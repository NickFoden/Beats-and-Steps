import React from "react";

import NavLink from "../navigation/NavLink";
import classes from "../../styles/pages/homePage/welcome.module.scss";

const Welcome = () => {
  return (
    <section className="sectionContainer">
      <div className={classes.welcomeTitleContainer}>
        <h1 className={classes.title}>Beats &amp; Steps Arts Academy</h1>
        <p>
          An affiliate of the{" "}
          <strong>Center for Movement and Music (CMM)</strong> offering courses
          in:
        </p>
      </div>
      <div className={classes.list}>
        <div className={classes.list__department}>
          <NavLink link="/music/">music</NavLink>
          <ul>
            <li>Voice</li>
            <li>Piano</li>
            <li>Guitar</li>
            <li>Violin</li>
            <li>Music theory</li>
          </ul>
        </div>
        <div className={classes.list__department}>
          <NavLink link="/dance/">dance</NavLink>
          <ul>
            <li>Classical ballet</li>
            <li>Modern ballet</li>
            <li>Jazz</li>
            <li>Hiphop</li>
          </ul>
        </div>
      </div>
      <div className={classes.enrollButton}>
        {/* SEEMS QUITE COMPLICATED BUT TRY TO FIND A WAY TO LINK DIRECTLY TO THE FORM */}
        <NavLink link="/contact/">Enroll Here</NavLink>
      </div>
    </section>
  );
};

export default Welcome;
