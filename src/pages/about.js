import React from "react";
import Layout from "../components/navigation/Layout";
import Image from "../components/Image";
import classes from "../styles/pageStyles/about.module.scss";
import NavLink from "../components/navigation/NavLink";
// import SEO from "../components/SEO";

const About = () => {
  return (
    <Layout>
      <section className={classes.aboutContainer}>
        <Image
          className={classes.image}
          filename="rehearsal.jpg"
          alt="Beats and Steps students rehearsing"
        />
        <div className={classes.section}>
          <h1>Join the Beat</h1>
          <div className={classes.text}>
            <p>
              The Beats and Steps Arts Academy (B&amp;S), formerly known as CMM
              White Plains, started operations in 2013 as an Affiliate of the
              Center for Movement and Music (CMM).
            </p>
            <p>
              Working towards CMM’s vision of developing children’s full
              potential in the arts, B&amp;S operates this performing arts
              center in consonance with CMM’s instructional goals, honing its
              students to the highest standards of quality training CMM is known
              for.
            </p>
            <p>
              Our Dance Department is an affiliate of the Australian
              Conservatoire of Ballet (ACB) and enters students to ACB’s
              training and examination program. We are also a member of the
              Association of Ballet Academies of the Philippines (ABAP). Our
              Music Department is an affiliate of the London-based Associated
              Board of the Royal Schools of Music (ABRSM) and participates
              yearly in its international music exams.
            </p>
            <p>
              BRIEF COURSE INFORMATION / SCHEDULE / FEES?
            </p>
            <NavLink link="/contact">Enroll Here</NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
