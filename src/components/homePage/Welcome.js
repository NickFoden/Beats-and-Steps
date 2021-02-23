import React from "react";

import NavLink from "../navigation/NavLink";
import classes from "../../styles/pages/homePage/welcome.module.scss";

const Welcome = () => {
  return (
    <section className="sectionContainer">
      <h1 className={classes.title}>Beats &amp; Steps Arts Academy</h1>
      <p>
        An affiliate of the <strong>Center for Movement and Music (CMM)</strong>{" "}
        offering courses in:
      </p>
      <div className={classes.list}>
        <div className={classes.list__department}>
          <h2>Music</h2>
          <ul>
            <li>Voice</li>
            <li>Piano</li>
            <li>Guitar</li>
            <li>Violin</li>
            <li>Music theory</li>
          </ul>
          <NavLink link="/music/">music</NavLink>
        </div>
        <div className={classes.list__department}>
          <h2>Dance</h2>
          <ul>
            <li>Classical ballet</li>
            <li>Modern ballet</li>
            <li>Jazz</li>
            <li>Hiphop</li>
          </ul>
          <NavLink link="/dance/">dance</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
