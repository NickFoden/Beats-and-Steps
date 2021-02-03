import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/faculty.module.scss";

const getImages = graphql`
  {
    faculty: file(relativePath: { eq: "Faculty Page/staff.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Faculty = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <SEO
        title="Faculty"
        description="Faculty page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.facultyContainer}>
        <h1>Coming Soon!</h1>
        <Img
          className={classes.image}
          fluid={data.faculty.childImageSharp.fluid}
          alt="Beats &amp; Steps Staff"
        />
      </section>
    </Layout>
  );
};

export default Faculty;
