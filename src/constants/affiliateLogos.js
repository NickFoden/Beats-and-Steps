import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const AffiliateLogos = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "logo" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            fixed(width: 70, height: 70, quality: 90, webpQuality: 90) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const logo = data.allFile.nodes.find(logo =>
    logo.relativePath.includes(props.filename)
  );

  if (!logo) {
    return null;
  }

  const logoFixed = logo.childImageSharp.fixed;
  return (
    <Img
      className={props.className}
      alt={props.alt}
      fixed={logoFixed}
      imgStyle={props.style}
    />
  );
};

export default AffiliateLogos;
