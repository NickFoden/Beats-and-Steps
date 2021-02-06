import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/music.module.scss";

export const getImages = graphql`
  {
    voice: file(relativePath: { eq: "Music Page/voice.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    guitar: file(relativePath: { eq: "Music Page/guitar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Music = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <SEO
        title="Music"
        description="Music Department page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.musicContainer}>
        <div className={[classes.block, classes.reverseBlock].join(" ")}>
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Music Program</h2>
            <p>
              Beats &amp; Steps Arts Academy, offers individual instruction in
              voice, piano, guitar, violin, and music theory following four
              cycles: first semester, second semester, summer, and midyear.
            </p>
            <p>
              All ages are admitted, subject to course specific entry-level
              requirements.
            </p>
            <p className={classes.lastP}>
              We give special emphasis to detailed technique, ear training,
              sight-reading, and repertoire-building.
            </p>
            <NavLink link="/contact/">Enroll</NavLink>
          </article>
          <Img
            className={[classes.image, classes.imageRight].join(" ")}
            fluid={data.voice.childImageSharp.fluid}
            alt="Beats &amp; Steps voice students and teacher"
          />
        </div>
        <div className={[classes.block, classes.middleBlock].join(" ")}>
          <Img
            imgStyle={{ objectPosition: "top" }}
            className={[classes.image, classes.imageLeft].join(" ")}
            fluid={data.guitar.childImageSharp.fluid}
            alt="Beats &amp; Steps Guitar Student"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <p>
              Beats &amp; Steps is aligned with the instructional standards of
              the Center for Movement &amp; Music (CMM), as its Affiliate
              Centre.
            </p>
            <p>
              We participate in the annual Associated Board of the Royal Schools
              of Music (ABRSM) London music exams for international benchmarking
              of musical achievement, under the auspices of CMM.
            </p>
            <p>We are a designated ABRSM exam center in the country.</p>
            <p className={classes.lastP}>
              We provide performance opportunities through regular
              lesson-workshops in music performance and annual recitals/public
              performances.
            </p>
            <NavLink link="/contact/">Enroll</NavLink>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Music;
