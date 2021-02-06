import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../../styles/components/logo.module.scss";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "Logos/dummy-logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 85, webpQuality: 85) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const Logo = () => {
  const data = useStaticQuery(getImages);

  return (
    <div className={classes.logo}>
      <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="Beats and Steps Arts Academy Logo"
      />
    </div>
  );
};

export default Logo;
