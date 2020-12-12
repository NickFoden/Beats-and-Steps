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
        <div className={classes.text}>
          <p>
            Beats &amp; Steps (B&amp;S) is a Quezon City based performing arts
            center working in consonance with CMM’s instructional goals, honing
            its students to the highest standards of quality training CMM is
            known for.
          </p>
        </div>
        <h2 className={classes.affTitle}>B&amp;S is a proud affiliate of:</h2>
        {/* <div className={classes.affText}>
        <ul>
          <strong>B&amp;S is a proud affiliate of:</strong>
          <li>Center for Movement and Music</li>
          <li>Associated Board of the Royal Schools of Music (ABRSM)</li>
          <li>Australian Conservatoire of Ballet</li>
          <li>Philippine Ballet Theatre</li>
        </ul>
        </div> */}
        <div className={classes.affLinks}>
          <ul>
            <li>
              <a href="https://www.facebook.com/cmm.1998ph/">
                <AffLogos
                  filename="CMM.jpg"
                  alt="logo of The Center of Movement and Music"
                  className={classes.logo}
                />
              </a>
              <p>
                <a
                  className={classes.textLink}
                  href="https://www.facebook.com/cmm.1998ph/"
                >
                  Center for Movement and Music
                </a>
              </p>
            </li>
            <li>
              <a href="https://www.abrsm.org/">
                <AffLogos
                  filename="ABRSM.jpg"
                  alt="logo of The Associated Board of the Royal Schools of Music"
                  className={classes.logo}
                />
              </a>
              <p>
                <a className={classes.textLink} href="https://www.abrsm.org/">
                  Royal Schools of Music (ABRSM)
                </a>
              </p>
            </li>
            <li>
              <a href="http://www.acbaustralia.com.au/">
                <AffLogos
                  filename="ACB-small.jpg"
                  alt="logo of The Australian Conservatoire of Ballet"
                  className={classes.logo}
                />
              </a>
              <p>
                <a
                  className={classes.textLink}
                  href="http://www.acbaustralia.com.au/"
                >
                  Australian Conservatoire of Ballet
                </a>
              </p>
            </li>
            <li>
              <a href="https://www.pbt.ph/">
                <AffLogos
                  filename="PBT.png"
                  alt="logo of the Philippine Ballet Theatre"
                  className={classes.logo}
                  style={{ background: "white" }}
                />
              </a>
              <p>
                <a className={classes.textLink} href="https://www.pbt.ph/">
                  Philippine Ballet Theatre
                </a>
              </p>
            </li>
          </ul>
        </div>
        <NavLink link="/about">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
