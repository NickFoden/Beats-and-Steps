import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/about.module.scss";

export const getImages = graphql`
  {
    teachingDance: file(relativePath: { eq: "about/teaching-dance.JPG" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    teachingMusic: file(relativePath: { eq: "about/teaching-music.JPG" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <SEO
        title="About"
        description="About Page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.aboutContainer}>
        <div className={classes.block}>
          <Img
            className={classes.image}
            alt="Beats &amp; Steps teacher and student dancing"
            fluid={data.teachingDance.childCloudinaryAsset.fluid}
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <h2>Nurturing Together</h2>
            <p>
              The Beats and Steps Arts Academy, formerly known as CMM White
              Plains, started operations in 2013 as an Affiliate of the Center
              for Movement and Music (CMM).
            </p>
            <p>
              Working towards CMM’s vision of developing children’s full
              potential in the arts, Beats &amp; Steps operates this performing
              arts center in consonance with CMM’s instructional goals, honing
              its students to the highest standards of quality training CMM is
              known for.
            </p>
            <p>
              Beats &amp; Steps follows CMM's progressive course offerings in
              voice, piano, guitar, violin, music theory, classical and modern
              ballet, jazz, hiphop, as well as short-term special courses in
              art, yoga, b-boying, Zumba and Taekwondo.
            </p>
            <p>
              Our Music Department is an affiliate of the London-based Royal
              Schools of Music (RSM) and participates yearly in its
              international music exams.
            </p>
            <p>
              Our Dance Department is an affiliate of the Australian
              Conservatoire of Ballet (ACB) and enters students to ACB’s
              training and examination program. We are also a member of the
              Association of Ballet Academies of the Philippines (ABAP).
            </p>
          </article>
        </div>
        <div className={classes.block}>
          <Img
            className={classes.image}
            alt="Beats &amp; Steps teacher and student playing piano"
            fluid={data.teachingMusic.childCloudinaryAsset.fluid}
          />
          <article
            className={["sectionContainer", classes.block__text].join(" ")}
          >
            <p>
              Beats &amp; Steps abides by CMM’s balanced and progressive program
              of study where the level of technical expertise is within the
              grasp of students of all ages.
            </p>
            <p>
              Through a comprehensive curriculum of classical studies, the
              student is provided with a foundation for further training in
              modern modes of performance. Special classes and workshops
              complement our structured syllabi.
            </p>
            <p>
              At the core of the CMM and Beats &amp; Steps training is providing
              performance opportunities for our students.
            </p>
            <p>
              The annual recitals, participation in festivals, and choice public
              performances provide the venue for the students to display their
              technical and performance abilities, and connect with their
              audiences.
            </p>
            <p>
              Together, CMM and Beats &amp; Steps are committed to providing a
              nurturing environment where students of all ages and levels may
              achieve their artistic best.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
