import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../../styles/pages/faculty.module.scss";

const getImages = graphql`
  {
    image: allFile(
      filter: { relativeDirectory: { eq: "Faculty Page/Music" } }
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
      filter: { public_id: { regex: "/gatsby-cloudinary/Faculty Page/Music/" } }
    ) {
      nodes {
        url
        context {
          custom {
            alt
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
        <div className={classes.artist}>
          <figure>
            <Img
              className={classes.artistImage}
              fluid={artist.childCloudinaryAsset.fluid}
              alt={artistContent.context.custom.caption}
            />
            <h2 className={classes.artistName}>
              {artistContent.context.custom.caption}
            </h2>
            <h3 className={classes.artistPosition}>
              {artistContent.context.custom.alt}
            </h3>
            <ul className={classes.artistHistory}>
              <li>{artistContent.context.custom.hist1}</li>
              <li>{artistContent.context.custom.hist2}</li>
            </ul>
          </figure>
        </div>
      </li>
    );
  });
  return musicComponent;
};

export default MusicTeachers;
