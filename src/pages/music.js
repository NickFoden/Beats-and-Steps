import React from "react";
import Layout from "../components/navigation/Layout";
import classes from "../styles/pageStyles/music.module.scss";
import Image from "../components/Image";
import NavLink from "../components/navigation/NavLink";
import SEO from "../components/SEO/SEO";

const Music = () => {
  return (
    <Layout>
      <SEO
        title="Music"
        description="Music Department page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.musicContainer}>
        <div className={[classes.block, classes.reverseBlock].join(" ")}>
          <article className={[classes.section, classes.block__text].join(" ")}>
            <h2>The Music Program</h2>
            <p>
              B&amp;S Arts Academy, offers individual instruction in voice,
              piano, guitar, violin, and music theory following four (4) cycles:
              first semester, second semester, summer, and midyear.
            </p>
            <p>
              All ages are admitted, subject to course specific entry-level
              requirements.
            </p>
            <p>
              We give special emphasis to detailed technique, ear training,
              sight-reading, and repertoire-building.
            </p>
            <NavLink link="/contact">Enroll</NavLink>
          </article>
          <Image
            className={[classes.image, classes.imageRight].join(" ")}
            filename="voice-class.jpg"
            alt="Beats &amp; Steps Ballet student playing the piano"
          />
        </div>
        <div className={[classes.block, classes.middleBlock].join(" ")}>
          <Image
            className={[classes.image, classes.imageLeft].join(" ")}
            filename="guitar.jpg"
            alt="Beats &amp; Steps Jazz Students posing"
          />
          <article className={classes.section}>
            <p>
              B&amp;S is aligned with the instructional standards of the Center
              for Movement &amp; Music (CMM), as its Affiliate Centre.
            </p>
            <p>
              Participates in the annual ABRSM London music exams for
              international benchmarking of musical achievement, under the
              auspices of CMM.
            </p>
            <p>We are a designated ABRSM exam center in the country.</p>
            <p>
              We provide performance opportunities through regular
              lesson-workshops in music performance and annual recitals/public
              performances.
            </p>
            <NavLink link="/contact">Enroll</NavLink>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Music;
