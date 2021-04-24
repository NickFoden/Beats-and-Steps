import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import classes from "../../styles/pages/homePage/instagram.module.scss";

const getImages = graphql`
  {
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, webpQuality: 85) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

const nodeURL = "https://www.instagram.com/p";

const Instagram = () => {
  const {
    allInstaNode: { edges: images },
  } = useStaticQuery(getImages);

  return (
    <section className={classes.instaContainer}>
      <div className="sectionContainer">
        <h3 className={classes.instaTitle}>Instagram</h3>
        <p className={classes.hashtag}>
          <a
            href="https://www.instagram.com/beatsandstepsartsacademy/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            #beatsandstepsartsacademy
          </a>
        </p>
        <div className={classes.container}>
          {images.map(image => (
            <article className={classes.article} key={image.node.id}>
              <a
                href={`${nodeURL}/${image.node.id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  className={classes.image}
                  fluid={image.node.localFile.childImageSharp.fluid}
                  alt={
                    image.node.caption ||
                    "Image from the Beats and Steps Arts Academy Instagram page"
                  }
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
