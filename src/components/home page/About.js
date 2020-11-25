import React from "react";
import Image from "../Image";
import classes from "../../styles/home page/about.module.scss";
import NavLink from "../navigation/NavLink";
import logo1 from "../../assets/logo/ABRSM.jpg";
import logo2 from "../../assets/logo/ACB.png";

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
            Beats &amp; Steps (B&amp;S) is a Quezon City based performing arts
            center working in consonance with CMM’s instructional goals, honing
            its students to the highest standards of quality training CMM is
            known for.
          </p>
        </div>
        <p>
          B&amp;S is a proud affiliate of the London-based{" "}
          <strong>
            Associated Board of the Royal Schools of Music (ABRSM)
          </strong>{" "}
          and the <strong>Australian Conservatoire of Ballet</strong>:
        </p>
        <div>
          <img
            className={classes.logo}
            src={logo1}
            alt="logo of The Associated Board of the Royal Schools of Music"
          />
          <img
            className={classes.logo}
            src={logo2}
            alt="logo of The Australian Conservatoire of Ballet"
          />
        </div>
        <NavLink link="/about">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
