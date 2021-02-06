import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/pages/contact.module.scss";

const getImages = graphql`
  {
    contact: file(
      relativePath: { eq: "Contact Page/dancers.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 85, webpQuality: 85) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(getImages);

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.contactContainer}>
        <Img
          className={classes.image}
          fluid={data.contact.childImageSharp.fluid}
          alt="Beats and Steps students dancing"
        />
        <div className="sectionContainer">
          <h1>Open Enrollment</h1>
          <div className={classes.text}>
            <p>Enrollment is all year round! For inquiries, please call:</p>
            <a className={classes.contactLink} href="tel:0917-5747131">
              0917-574-7131
            </a>
            <p>Or directly message us via:</p>
            <ul>
              <li>
                <a
                  className={classes.contactLink}
                  href="https://www.facebook.com/beatsandstepsartsacademy/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className={classes.contactLink}
                  href="https://www.instagram.com/beatsandstepsartsacademy/?hl=en"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <h2>Our Address:</h2>
          <div className={classes.text}>
            <ul className={classes.address}>
              <li>Marius Acropoli Building</li>
              <li>140 Katipunan Ave Extension</li>
              <li>St Ignatius, Quezon City</li>
              <li>Philippines</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
