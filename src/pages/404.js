import React from "react";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import NavLink from "../components/navigation/NavLink";
import classes from "../styles/pages/404.module.scss";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="sectionContainer">
      <h1 className={classes.errorHeading}>Sorry, this page doesn't exist!</h1>
      <p>Please click below to navigate to the Home page</p>
      <NavLink link="/">Home</NavLink>
    </section>
  </Layout>
);

export default NotFoundPage;
