import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import Form from "../components/my-form/MainForm";
import classes from "../styles/pages/contact.module.scss";

// DELETE AFTER COVID
import CovidBanner from '../components/covid-banner/covid-banner';

const getImages = graphql`
  {
    contact: file(relativePath: { eq: "contact/contact.jpg" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
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
      <CovidBanner />
      <section className={classes.contactContainer}>
        <Img
          className={classes.image}
          fluid={data.contact.childCloudinaryAsset.fluid}
          alt="Beats and Steps students dancing"
        />
        <div className={["sectionContainer", classes.textContainer].join(" ")}>
          <div className={classes.text}>
            <h1>Open Enrollment!</h1>
            <p>Please complete the enrollment form below.</p>
            <p>For inquiries, use the Messenger chat or call:</p>
            <a className={classes.contactLink} href="tel:0917-5747131">
              0917-574-7131
            </a>
            <p>Or you can reach us via:</p>
            <ul className={classes.socialLinks}>
              <li>
                <a
                  href="https://www.facebook.com/beatsandstepsartsacademy/"
                  className={classes.socialLink}
                  aria-label="Beats and Steps Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare style={{ color: "#4267B2" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/beatsandstepsartsacademy/?hl=en"
                  className={classes.socialLink}
                  aria-label="Beats and Steps Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{
                      color: "#fff",
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                      borderRadius: "5px",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <h2 className={classes.addressHeader}>Our Address:</h2>
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
      <div id="form" className={classes.anchorPoint} />
      <div className={classes.formContainer}>
        <Form />
      </div>
    </Layout>
  );
};

export default Contact;
