import React from "react";
import Image from "../Image";
import classes from "../../styles/home page/about.module.scss";
import NavLink from "../navigation/NavLink";
import AffLogos from "../../constants/affiliateLogos";

const About = () => {
  return (
    <section className={classes.about}>
      <Image
        className={classes.image}
        filename="about.jpg"
        alt="Beats and Steps Satellite Blossoming Ballet students posing as fairies"
      />
      <div className={classes.section}>
        <p>
          Beats &amp; Steps (B&amp;S) is a Quezon City based performing arts
          center working in consonance with CMM’s instructional goals, honing
          its students to the highest standards of quality training CMM is known
          for.
        </p>
        <h2 className={classes.affTitle}>B&amp;S is a proud affiliate of:</h2>
        <div className={classes.affLinks}>
          <ul className={classes.affLinks__list}>
            <li className={classes.affLinks__listItem}>
              <a href="https://www.facebook.com/cmm.1998ph/">
                <AffLogos
                  filename="CMM.jpg"
                  alt="logo of The Center of Movement and Music"
                  className={classes.affLinks__logo}
                />
              </a>
              <a
                className={classes.affLinks__textLink}
                href="https://www.facebook.com/cmm.1998ph/"
              >
                Center for Movement and Music
              </a>
            </li>
            <li className={classes.affLinks__listItem}>
              <a href="https://www.abrsm.org/">
                <AffLogos
                  filename="ABRSM.jpg"
                  alt="logo of The Associated Board of the Royal Schools of Music"
                  className={classes.affLinks__logo}
                />
              </a>
              <a
                className={classes.affLinks__textLink}
                href="https://www.abrsm.org/"
              >
                Associated Board of the Royal Schools of Music (ABRSM)
              </a>
            </li>
            <li className={classes.affLinks__listItem}>
              <a href="http://www.acbaustralia.com.au/">
                <AffLogos
                  filename="ACB-small.jpg"
                  alt="logo of The Australian Conservatoire of Ballet"
                  className={classes.affLinks__logo}
                />
              </a>
              <a
                className={classes.affLinks__textLink}
                href="http://www.acbaustralia.com.au/"
              >
                Australian Conservatoire of Ballet
              </a>
            </li>
            <li className={classes.affLinks__listItem}>
              <a href="https://www.pbt.ph/">
                <AffLogos
                  filename="PBT.png"
                  alt="logo of the Philippine Ballet Theatre"
                  className={classes.affLinks__logo}
                  style={{ background: "white" }}
                />
              </a>
              <a
                className={classes.affLinks__textLink}
                href="https://www.pbt.ph/"
              >
                Philippine Ballet Theatre
              </a>
            </li>
          </ul>
        </div>
        <NavLink link="/about">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
