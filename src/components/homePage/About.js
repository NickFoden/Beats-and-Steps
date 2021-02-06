import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import NavLink from "../navigation/NavLink";
import AffLogos from "../../constants/affLogos";
import classes from "../../styles/pages/homePage/about.module.scss";

const getImages = graphql`
  {
    about: file(relativePath: { eq: "Index Page/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 85, webpQuality: 85) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(getImages);

  return (
    <section className={classes.about}>
      <Img
        imgStyle={{ objectFit: "fill" }}
        className={classes.image}
        alt="Beats and Steps Satellite Blossoming Ballet students posing as fairies"
        fluid={data.about.childImageSharp.fluid}
      />
      <div className={`sectionContainer ${classes.aboutTextContainer}`}>
        <p>
          <strong>Beats &amp; Steps </strong> is a Quezon City based performing
          arts center working in consonance with CMM’s instructional goals,
          honing its students to the highest standards of quality training CMM
          is known for.
        </p>
        <h2 className={classes.affTitle}>
          Beats &amp; Steps is a proud affiliate of:
        </h2>
        <AffLogos />
        <NavLink link="/about/">
          Find out more
        </NavLink>
      </div>
    </section>
  );
};

export default About;
