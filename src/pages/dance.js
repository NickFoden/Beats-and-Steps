import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/dance.module.scss";

// DELETE RECITAL VIDEO AFTER ONE MONTH (IF GIVEN ALL CLEAR)
import Vimeo from "../components/vimeo-vid/VimeoVid";

// DELETE AFTER COVID
import CovidBanner from "../components/covid-banner/covid-banner";

export const getImages = graphql`
  {
    ballet: file(relativePath: { eq: "dance/ballet.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    jazz: file(relativePath: { eq: "dance/jazz.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    hiphop: file(relativePath: { eq: "dance/hiphop.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const Dance = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <SEO
        title="Dance"
        description="Dance Department page for Beats &amp; Steps Arts Academy"
      />
      <CovidBanner />
      <section className={classes.danceContainer}>
        <div className={classes.danceBanner}>
          <h1>The Dance Program</h1>
          <div className={classes.vimeoBlockContainer}>
            <h2 className={classes.recitalTitle}>Dance Recital - 2021</h2>
            <Vimeo
              videoSrcURL="https://player.vimeo.com/video/562009677?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              videoTitle="B&amp;S Dance Recital Harmony 2021"
            />
          </div>
          <div className={classes.block}>
            <video
              src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto,fl_animated/v1621050825/gatsby-cloudinary/videos/Dance-Zoom_zdgcyx.mov`}
              autoPlay={true}
              loop={true}
              muted={true}
            />
            <article
              className={["sectionContainer", classes.block__text].join(" ")}
            >
              <p>
                Beats &amp; Steps, in partnership with CMM aims to present
                excellence in dance training by teaching correct foundation in
                an atmosphere that is both fun and challenging.
              </p>
              <p>
                Our program aims to develop in the student a professional
                attitude which will assist them in the pursuit of a career,
                either as a professional dancer or dance teacher.
              </p>
            </article>
          </div>
        </div>
        <div id="ballet" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            className={classes.image}
            fluid={data.ballet.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Ballet students in swan lake costumes"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Ballet Program</h2>
            <p>
              Our core ballet program is the Australian-Based Ballet
              Conservatoire (BC) Syllabus.
            </p>
            <p>
              The BC program emphasizes correct placement, dynamics and
              performing quality which are all qualities inherent in Russia’s
              Vaganova method of teaching ballet.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
        <div id="jazz" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            className={[classes.image, classes.jazzImg].join(" ")}
            fluid={data.jazz.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Jazz Students"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Jazz Program</h2>
            <p>
              Our Jazz Program focuses on vocabulary of dance steps, technique
              and movement, as well as preparing routines for performance.
            </p>
            <p>
              Students will get to learn lyrical, Broadway and New York jazz
              styles.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
        <div id="hiphop" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            className={classes.image}
            imgStyle={{ objectPosition: "0 37%" }}
            fluid={data.hiphop.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Hiphop Students posing"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Hiphop Program</h2>
            <p>
              Hiphop is an energizing form of dance that focuses on
              self-expression, personal style and improvisation.
            </p>
            <p>
              In addition, students are encouraged to exercise their creativity
              and experiment with different styles.
            </p>
            <NavLink link="/contact/#form">Enroll</NavLink>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Dance;
