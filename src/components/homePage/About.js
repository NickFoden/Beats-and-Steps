import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import NavLink from "../navigation/NavLink";
import AffLogos from "../../constants/affLogos";
import classes from "../../styles/pages/homePage/about.module.scss";

const getImages = graphql`
  {
    about: file(relativePath: { eq: "index/about.jpg" }) {
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
    <section className={classes.indexAboutContainer}>
      <Img
        imgStyle={{ objectFit: "fill" }}
        className={classes.image}
        alt="Beats and Steps Satellite Blossoming Ballet students posing as fairies"
        fluid={data.about.childCloudinaryAsset.fluid}
      />
      <div className={`sectionContainer ${classes.aboutTextContainer}`}>
        <p>
          <strong>Beats &amp; Steps </strong> is a CMM affiliate center that
          envisions developing children’s full potential in the arts.
        </p>
        <h2 className={classes.affTitle}>We are a proud affiliate of:</h2>
        <AffLogos />
        <NavLink link="/about/">Find out more</NavLink>
      </div>
    </section>
  );
};

export default About;
