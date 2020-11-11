import React from "react";
import classes from "../../styles/home page/welcome.module.scss";
import { Link } from "gatsby";

const Welcome = () => {
  return (
    <section className={classes.section}>
      <h1>The Beat Is On</h1>
      <p>
        An Affiliate of the Center for Movement and Music (CMM) offering courses
        in: classical ballet, jazz and hip-hop; voice, piano,
        guitar, violin and music theory.
      </p>
      <div className={classes.cta}>
        <Link to="/about">Find out more</Link>
      </div>
    </section>
  );
};

export default Welcome;
