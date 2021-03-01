import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../../styles/pages/faculty.module.scss";

const getImages = graphql`
  {
    image: allFile(
      filter: { relativeDirectory: { eq: "faculty/music" } }
      sort: { fields: name }
    ) {
      nodes {
        relativePath
        id
        childCloudinaryAsset {
          fluid(transformations: ["c_thumb"]) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
    info: allCloudinaryMedia(
      filter: { public_id: { regex: "/gatsby-cloudinary/faculty/music/" } }
    ) {
      nodes {
        url
        context {
          custom {
            title1
            title2
            caption
            hist1
            hist2
          }
        }
      }
    }
  }
`;

const MusicTeachers = () => {
  const data = useStaticQuery(getImages);
  const { image, info } = data;

  const musicComponent = image.nodes.map((artist, index) => {
    const artistContent = info.nodes[index];

    return (
      <li className={classes.artistListItem} key={artist.id}>
        <figure>
          <Img
            className={classes.artistImage}
            fluid={artist.childCloudinaryAsset.fluid}
            alt={artistContent.context.custom.caption}
          />
          <div className={classes.artistInfo}>
            <h2 className={classes.artistName}>
              {artistContent.context.custom.caption}
            </h2>
            <ul className={classes.artistPosition}>
              <li>{artistContent.context.custom.title1}</li>
              <li>{artistContent.context.custom.title2}</li>
            </ul>
            <ul className={classes.artistHistory}>
              <li>{artistContent.context.custom.hist1}</li>
              <li>{artistContent.context.custom.hist2}</li>
            </ul>
          </div>
        </figure>
      </li>
    );
  });
  return musicComponent;
};

export default MusicTeachers;
