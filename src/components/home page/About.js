import React from "react";
import Image from "../Image";
import classes from "../../styles/home page/about.module.scss";
import NavLink from "../navigation/NavLink";
import logoCMM from "../../assets/logo/CMM.jpg";
import logoABRSM from "../../assets/logo/ABRSM.jpg";
import logoACB from "../../assets/logo/ACB-small.jpg";
import logoPBT from "../../assets/logo/PBT.png";

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
          B&amp;S is a proud affiliate of <strong>CMM</strong>,{" "}
          <strong>Philippine Ballet Theatre</strong> the London-based{" "}
          <strong>
            Associated Board of the Royal Schools of Music (ABRSM)
          </strong>{" "}
          and the <strong>Australian Conservatoire of Ballet</strong>:
        </p>
        <div className={classes.exLinks}>
          <a href="https://www.facebook.com/cmm.1998ph/">
            <img
              className={classes.logo}
              src={logoCMM}
              alt="logo of The Center of Movement and Music"
            />
          </a>
          <a href="https://www.pbt.ph/">
            <img
              style={{ background: "white" }}
              className={classes.logo}
              src={logoPBT}
              alt="logo of The Center of Movement and Music"
            />
          </a>
          <a href="https://www.abrsm.org/">
            <img
              className={classes.logo}
              src={logoABRSM}
              alt="logo of The Associated Board of the Royal Schools of Music"
            />
          </a>
          <a href="http://www.acbaustralia.com.au/">
            <img
              className={classes.logo}
              src={logoACB}
              alt="logo of The Australian Conservatoire of Ballet"
            />
          </a>
        </div>
        <NavLink link="/about">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
