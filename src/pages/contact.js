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
          <h1>PLACEHOLDER - Enroll</h1>
          <div className={classes.text}>
            <p>
              For inquiries, please text 0917-5747131 or send us a message on
              Instagram or Facebook
            </p>
          </div>
          <h2>Contact Details</h2>
          <div className={classes.text}>
            <p>
              Marius Acropoli Building, 140 Katipunan Ave. Extension, St.
              Ignatius Quezon City, Philippines
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
