import React from "react";
import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import classes from "../styles/navigation/404.module.scss";
import NavLink from "../components/navigation/NavLink";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={classes.section}>
      <h1 className={classes.errorHeading}>Sorry, this page doesn't exist</h1>
      <p>Please click below to navigate to the Home page</p>
      <NavLink link="/">Home</NavLink>
    </section>
  </Layout>
);

export default NotFoundPage;
