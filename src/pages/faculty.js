import React from "react";
import Layout from "../components/navigation/Layout";
import classes from "../styles/pageStyles/contact.module.scss";
import Image from "../components/Image";
import SEO from "../components/SEO/SEO";

const Faculty = () => {
  return (
    <Layout>
      <SEO
        title="Faculty"
        description="Faculty page for Beats &amp; Steps Arts Academy"
      />
      <section className={classes.facultyContainer}>
        <Image filename="staff.jpg" alt="Beats &amp; Steps Staff"/>
      </section>
    </Layout>
  );
};

export default Faculty;
