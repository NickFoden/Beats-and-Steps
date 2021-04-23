import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/dance.module.scss";

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
      <section className={classes.danceContainer}>
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
              Beats &amp; Steps, in partnership with CMM aims to present
              excellence in dance training by teaching a sound classical
              foundation in an atmosphere that is both fun and challenging.
            </p>
            <p>
              Our core ballet program is the Australian-based Ballet
              Conservatoire Syllabus. The BC program emphasizes correct
              placement, dynamics and performing quality which are all qualities
              inherent in Russia’s Vaganova method of teaching ballet.
            </p>
            <p>
              The program aims to develop in the student a professional attitude
              which will assist them in the pursuit of a career, either as a
              professional dancer or dance teacher.
            </p>
            <NavLink link="/contact/">Enroll</NavLink>
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
              As the level progresses, technical skills are achieved by building
              blocks known as jazz progressions. Students will get to learn
              lyrical, Broadway and New York jazz styles.
            </p>
            <p>
              Lyrical jazz is an expressive style of jazz with a solid
              foundation in ballet. It can either be modern-based or jazz-based,
              depending on the dancer’s strengths and the choreographer’s
              preference.
            </p>
            <p>
              Passion, emotion and expression are core elements in lyrical
              movement. Today’s hot style of jazz concentrates on clean, tight
              movements along with traditional jazz technique. This style is
              seen in choreography used in today’s popular music videos and
              commercials.
            </p>
            <p>
              The Luigi jazz method, which is the foundation of much of Broadway
              dancing, is also part of our jazz curriculum, along with the
              structured curriculum of Dance Arts International, which has been
              used for teaching jazz in the United States since the 1930s.
            </p>
            <NavLink link="/contact/">Enroll</NavLink>
          </article>
        </div>
        <div id="hiphop" className={classes.anchorPoint} />
        <div className={classes.block}>
          <Img
            className={classes.image}
            fluid={data.hiphop.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps Hiphop Students posing"
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>The Hiphop Program</h2>
            <p>
              Hiphop is an energizing form of dance that focuses on
              self-expression, personal style and improvisation. In addition,
              students are encouraged to exercise their creativity and
              experiment with different styles.
            </p>
            <p>
              The goals of kids and teens hiphop classes are to introduce basic
              moves and lay proper dance foundation. For teens the fundamentals
              of hiphop: breaking, locking and popping are learned.
            </p>
            <p>
              Basic b-boying, often called “breakdancing”, is a popular style of
              hiphop also included in the program. The dance consists of four
              primary elements: toprock, downrock, power moves and freezes.
            </p>
            <NavLink link="/contact/">Enroll</NavLink>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Dance;
