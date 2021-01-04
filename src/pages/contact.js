import React from "react";
import Layout from "../components/navigation/Layout";
import classes from "../styles/pageStyles/contact.module.scss";
import Image from "../components/Image";
import SEO from "../components/SEO/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.contactContainer}>
        <Image
          className={classes.image}
          filename="dancers.jpg"
          alt="Beats and Steps students dancing"
        />
        <div className={classes.section}>
          <h1>Open Enrollment</h1>
          <div className={classes.text}>
            <p>
              We are now registering for the next school year! For inquiries,
              please call:
            </p>
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
