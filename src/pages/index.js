import React from "react";

import Layout from "../components/navigation/Layout";
import Video from "../components/homePage/Video";
import Welcome from "../components/homePage/Welcome";
import About from "../components/homePage/About";
import Instagram from "../components/homePage/Instagram";
import SEO from "../components/SEO/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Video />
      <Welcome />
      <About />
      <Instagram />
    </Layout>
  );
};

export default IndexPage;
