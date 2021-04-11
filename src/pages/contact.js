import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import Form from "../components/my-form/MainForm";
// import Form from "../components/google-form/form";
import classes from "../styles/pages/contact.module.scss";

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
      <section className={classes.contactContainer}>
        <Img
          className={classes.image}
          fluid={data.contact.childCloudinaryAsset.fluid}
          alt="Beats and Steps students dancing"
        />
        <div className={["sectionContainer", classes.textContainer].join(" ")}>
          <h1>Open Enrollment</h1>
          <div className={classes.text}>
            <h2>Enrollment is all year round!</h2>
            <p>Please complete the enrollment form below.</p>
            <p>For inquiries, please use the Messenger chat or call:</p>
            <a className={classes.contactLink} href="tel:0917-5747131">
              0917-574-7131
            </a>
            <p>Or you can reach us via:</p>
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
      <div className={classes.formContainer}>
        <Form />
      </div>
    </Layout>
  );
};

export default Contact;
