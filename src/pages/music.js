import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/music.module.scss";

// DELETE AFTER COVID
import CovidBanner from "../components/covid-banner/covid-banner";

// DELETE AFTER RECITAL VIDEOS UPLOADED
import RecitalBanner from "../components/recital-banner/recital-banner";

export const getImages = graphql`
  {
    music: file(relativePath: { eq: "music/music.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
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
      <RecitalBanner />
      <section className={classes.musicContainer}>
        <div className={classes.musicBanner}>
          <h1>The Music Program</h1>
          <div className={classes.block}>
            <Img
              // ADD SYLLABUS LOGOS?
              className={classes.image}
              fluid={data.music.childCloudinaryAsset.fluid}
              alt="Beats &amp; Steps Music students"
            />
            <article
              className={["sectionContainer", classes.block__text].join(" ")}
            >
              <p>
                Beats &amp; Steps offers individual instruction in voice, piano,
                guitar, violin and music theory. All ages are admitted, subject
                to course specific entry-level requirements.
              </p>
              <p>
                Our program is aligned with the instructional standards of the
                Center for Movement &amp; Music (CMM), as its Affiliate Centre.
                Individual instruction is at the heart of Beats &amp; Steps
                Music Program and is available to children from beginners to
                advanced levels.
              </p>
              <p>
                Our professional faculty members are dedicated to making your
                child’s experience stimulating and fun. Our private lessons
                ensure that your child receives personalized attention and
                expert guidance as they develop their musicality.
              </p>
            </article>
          </div>
        </div>
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
            <p>Our primary emphasis is on the mastery of singing technique.</p>
            <p>
              We follow the bel canto (“beautiful singing”) technique and train
              our students to become confident and expressive vocal performers.
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
              Our piano program provides a strong foundation in piano skill and
              a program for a progressive study in piano.
            </p>
            <p>
              Each session is carefully structured to include technical
              exercises, theory building, ear-training, and performance
              practice.
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
              Our guitar studies offer the necessary foundation in classical
              guitar, which allows the developing guitarist to explore varied
              styles, including that of the electric guitar.
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
              Technique consistency is emphasized to allow the student to
              ultimately focus on the style interpretation of the music, and not
              be hindered by insecure method of playing.
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
