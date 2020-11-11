import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import classes from "../../styles/home page/about.module.scss";

const query = graphql`
  {
    file(relativePath: { eq: "images/about.jpg" }) {
      childImageSharp {
        fluid {
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
      <Image className={classes.image} fluid={fluid} alt="Image of Students" />
      <div className={classes.section}>
        <div>
          <p>
            Beats &amp; Steps operates this performing arts center in consonance
            with CMM’s instructional goals, honing its students to the highest
            standards of quality training CMM is known for.
          </p>
          <p>
            Click to see more about our departments.
          </p>
        </div>
        <div className={classes.links}>
          <Link className={classes.link} to="/dance">dance</Link>
          <Link className={classes.link} to="/music">music</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
