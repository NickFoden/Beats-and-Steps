import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/music.module.scss";

// DELETE AFTER COVID
import CovidBanner from '../components/covid-banner/covid-banner';

export const getImages = graphql`
  {
    voice: file(relativePath: { eq: "music/voice.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    piano: file(relativePath: { eq: "music/piano.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    guitar: file(relativePath: { eq: "music/guitar.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    violin: file(relativePath: { eq: "music/violin.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
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
      <CovidBanner />
      <section className={classes.musicContainer}>
        <div id="voice" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            imgStyle={{ objectPosition: "top" }}
            className={classes.image}
            fluid={data.voice.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Voice student"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Voice Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
        <div id="piano" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            imgStyle={{ objectPosition: "top" }}
            className={classes.image}
            fluid={data.piano.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Piano Student"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Piano Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
        <div id="guitar" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            imgStyle={{ objectPosition: "top" }}
            className={classes.image}
            fluid={data.guitar.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Guitar Student"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Guitar Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
        <div id="violin" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            imgStyle={{ objectPosition: "top" }}
            className={classes.image}
            fluid={data.violin.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Violin Student"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Violin Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Music;

/* 
OG Music Text

  Beats &amp; Steps offers individual instruction in voice, piano,
  guitar, violin, and music theory following four cycles: first
  semester, second semester, summer, and midyear.

   All ages are admitted, subject to course specific entry-level
   requirements.

   We give special emphasis to detailed technique, ear training,
   sight-reading, and repertoire-building.

   Beats &amp; Steps is aligned with the instructional standards of
   the Center for Movement &amp; Music (CMM), as its Affiliate
   Centre.

   We participate in the annual Associated Board of the Royal Schools
   of Music (ABRSM) London music exams for international benchmarking
   of musical achievement, under the auspices of CMM.

   We provide performance opportunities through regular
   lesson-workshops in music performance and annual recitals/public
   performances.
*/
