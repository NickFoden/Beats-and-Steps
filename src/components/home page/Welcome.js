import React from "react";
import classes from "../../styles/home page/welcome.module.scss";
import NavLink from "../navigation/NavLink";

const Welcome = () => {
  return (
    <section className={classes.section}>
      <h1>The Beat Is On</h1>
      <p>
        An Affiliate of the Center for Movement and Music (CMM) offering courses
        in:
      </p>
      <div className={classes.list}>
        <div className={classes.music}>
          <h2>Music</h2>
          <ul>
            <li>Voice</li>
            <li>Piano</li>
            <li>Guitar</li>
            <li>Violin</li>
            <li>Music theory</li>
          </ul>
        </div>
        <div className={classes.dance}>
          <h2>Dance</h2>
          <ul>
            <li>Classical ballet</li>
            <li>Jazz</li>
            <li>Hip-hop</li>
          </ul>
        </div>
      </div>
      <div className={classes.links}>
        <NavLink link="/music">music</NavLink>
        <NavLink link="/dance">dance</NavLink>
      </div>
    </section>
  );
};

export default Welcome;
