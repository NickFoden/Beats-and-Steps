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
        <Image
          className={classes.image}
          filename="guitar.jpg"
          alt="Beats and Steps student playing guitar"
          style={{ objectPosition: "top" }}
        />
        <div className={classes.section}>
          <h1>Music Classes</h1>
          <div className={classes.text}>
            <p>
              PLACEHOLDER TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse tristique dui sed urna dapibus, ac
              porta eros fermentum. In lacus mi, placerat vitae neque id,
              posuere semper eros. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Quisque eros magna,
              mollis non eros at, fringilla imperdiet mi.
            </p>
            <NavLink link="/contact">Enroll Here</NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Music;
