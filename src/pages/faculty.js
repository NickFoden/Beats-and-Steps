import React from "react";

import DanceTeachers from "../components/facultyPage/danceTeachers";
import MusicTeachers from "../components/facultyPage/musicTeachers";
import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/faculty.module.scss";

const Faculty = () => {
  return (
    <Layout>
      <SEO
        title="Faculty"
        description="Faculty page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.facultyContainer}>
        <h1>The Artistic Team</h1>
        <div className={classes.danceFaculty}>
          <h2>Meet our Dance Instructors</h2>
          <ul
            className={classes.listContainer}
            aria-label="Meet our Dance Instructors"
          >
            <DanceTeachers />
          </ul>
          <h2>Meet our Music Instructors</h2>
          <ul
            className={classes.listContainer}
            aria-label="Meet our Music Instructors"
          >
            <MusicTeachers />
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
