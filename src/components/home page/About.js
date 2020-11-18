import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import classes from "../../styles/home page/about.module.scss";
import NavLink from "../navigation/NavLink";

const query = graphql`
  {
    file(relativePath: { eq: "images/about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, webpQuality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <section className={classes.about}>
      <Image
        className={classes.image}
        fluid={fluid}
        alt="Beats and Steps Satellite Blossoming Ballet students posing as fairies"
      />
      <div className={classes.section}>
        <div>
          <p>
            Beats &amp; Steps operates this performing arts center in consonance
            with CMM’s instructional goals, honing its students to the highest
            standards of quality training CMM is known for.
          </p>
          <p>Click to see more about our departments.</p>
        </div>
        <div className={classes.links}>
          <NavLink link="/dance">dance</NavLink>
          <NavLink link="/music">music</NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;
