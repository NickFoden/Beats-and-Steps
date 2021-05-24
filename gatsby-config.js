require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/* *** THIS WAS FROM GATSBY ROBOTS DOC, CODE BELOW IS FOR PREVENTING branch and previews from being crawled *** */
// const {
//   NODE_ENV,
//   URL: NETLIFY_SITE_URL = "https://www.example.com",
//   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
//   CONTEXT: NETLIFY_ENV = NODE_ENV,
// } = process.env;
// const isNetlifyProduction = NETLIFY_ENV === "production";
// const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

// module.exports = {
//   siteMetadata: {
//     siteUrl,
//   },
//   plugins: [
//     {
//       resolve: "gatsby-plugin-robots-txt",
//       options: {
//         resolveEnv: () => NETLIFY_ENV,
//         env: {
//           production: {
//             policy: [{ userAgent: "*" }],
//           },
//           "branch-deploy": {
//             policy: [{ userAgent: "*", disallow: ["/"] }],
//             sitemap: null,
//             host: null,
//           },
//           "deploy-preview": {
//             policy: [{ userAgent: "*", disallow: ["/"] }],
//             sitemap: null,
//             host: null,
//           },
//         },
//       },
//     },
//   ],
// };

module.exports = {
  siteMetadata: {
    title: `Beats and Steps Arts Academy, CMM Affiliate Center`,
    description: `The Beats and Steps Arts Academy is a CMM affiliate center that envisions developing children's full potential in the arts.`,
    author: `Alex Friedman`,
    image: `/logo.png`,
    // siteUrl: // *siteURL goes here but remove the trailing forward slash*,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   options: {
    //     host: `www.example.com`,
    //     sitemap: `www.example.com/sitemap.xml`,
    //     policy: [{ userAgent: `*`, allow: `/` }],
    //   },
    // },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        uploadFolder: "gatsby-cloudinary",
        // alwaysUseDefaultBase64: true, // Make sure insta photos still load on mobile devices
        enableDefaultTransformations: true,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `gatsby-cloudinary/faculty`,
        context: true,
        maxResults: 20,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/images/`,
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
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1503767980`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beats and Steps Arts Academy, CMM Affiliate Center`,
        short_name: `Beats and Steps`,
        start_url: `/`,
        background_color: `#e8f1f5`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/assets/images/Logos/smallLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
