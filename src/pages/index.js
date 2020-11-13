import React from "react";
import Layout from "../components/navigation/Layout";
import Hero from "../components/home page/Hero";
import Welcome from "../components/home page/Welcome";
import About from "../components/home page/About";
import Instagram from "../components/home page/Instagram";

// import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <About />
      <Instagram />
    </Layout>
  );
};

export default IndexPage;
