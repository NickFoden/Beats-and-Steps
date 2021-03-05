import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../../styles/components/logo.module.scss";

const getImages = graphql`
  {
    logo: file(relativePath: { eq: "Logos/logo.png" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
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
        fluid={data.logo.childCloudinaryAsset.fluid}
        alt="Beats and Steps Arts Academy Logo"
      />
    </div>
  );
};

export default Logo;
