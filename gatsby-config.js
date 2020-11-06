module.exports = {
  siteMetadata: {
    title: `Beats and Steps Arts Academy, CMM Affiliate Center`,
    description: `An Affiliate of the Center for Movement and Music (CMM), offering courses in: ballet and modern dance forms, voice and musical instruments (and theory), art, yoga, and Taekwondo`,
    author: `Alex Friedman`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/video/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beats and Steps Arts Academy, CMM Affiliate Center`,
        short_name: `Beats and Steps`,
        start_url: `/`,
        background_color: `#e8f1f5`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/assets/logo/dummy-logo-only.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Yantramanav`,
            variants: [`500`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
