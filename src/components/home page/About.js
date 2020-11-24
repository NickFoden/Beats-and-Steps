import React from "react";
import Image from "../Image";
import classes from "../../styles/home page/about.module.scss";
import NavLink from "../navigation/NavLink";

const About = () => {
  return (
    <section className={classes.about}>
      <Image
        className={classes.image}
        filename="about.jpg"
        alt="Beats and Steps Satellite Blossoming Ballet students posing as fairies"
      />
      <div className={classes.section}>
        <div className={classes.text}>
          <p>
            Beats &amp; Steps is a Quezon City based performing arts center
            working in consonance with CMM’s instructional goals, honing its
            students to the highest standards of quality training CMM is known
            for.
          </p>
        </div>
        <NavLink link="/about">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
