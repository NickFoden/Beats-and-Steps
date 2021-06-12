import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Image from "gatsby-image";

import DanceTeachers from "../components/facultyPage/danceTeachers";
import MusicTeachers from "../components/facultyPage/musicTeachers";
import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/faculty.module.scss";

const getImage = graphql`
  {
    header: file(relativePath: { eq: "faculty/staff.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const Faculty = () => {
  const data = useStaticQuery(getImage);

  return (
    <Layout>
      <SEO
        title="Faculty"
        description="Faculty page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.facultyContainer}>
        <h1 className={classes.title}>The Artistic Team</h1>
        <div className={classes.headerImgContainer}>
          <Image
            className={classes.headerImg}
            fluid={data.header.childCloudinaryAsset.fluid}
            alt="Beats &amp; Steps staff"
          />
        </div>
        <div className="sectionContainer">
          <h2>Meet our Dance Instructors</h2>
          <ul
            className={[classes.listContainer, classes.danceContainer].join(
              " "
            )}
            aria-label="Meet our Dance Instructors"
          >
            <DanceTeachers />
          </ul>
          <h2 className={classes.musicInstructorTitle}>
            Meet our Music Instructors
          </h2>
          <ul
            className={[classes.listContainer, classes.musicContainer].join(
              " "
            )}
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
