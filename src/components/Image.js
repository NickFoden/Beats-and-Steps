import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90, webpQuality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.nodes.find(img =>
    img.relativePath.includes(props.filename)
  );

  if (!image) {
    return null;
  }

  const imageFluid = image.childImageSharp.fluid;
  return (
    <Img
      className={props.className}
      alt={props.alt}
      fluid={imageFluid}
      imgStyle={props.style}
    />
  );
};

export default Image;
