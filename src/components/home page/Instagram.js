import React from "react";
import classes from "../../styles/home page/instagram.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import useViewport from "../../hooks/useViewport";

const getImages = graphql`
  {
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 4) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid(quality: 90, webpQuality: 90) {
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

  const { width } = useViewport();
  const breakpoint = 769;

  return (
    <section className={classes.section}>
      <h3>Instagram</h3>
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
            {width >= breakpoint ? (
              <p className={classes.caption}>{image.node.caption}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
