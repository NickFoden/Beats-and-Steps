import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../styles/components/affLogos.module.scss";

export const getImages = graphql`
  {
    cmm: file(relativePath: { eq: "Logos/CMM.jpg" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    abrsm: file(relativePath: { eq: "Logos/ABRSM.jpg" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    acb: file(relativePath: { eq: "Logos/ACB.jpg" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(getImages);

  return (
    <div className={classes.affLinks}>
      <ul className={classes.affLinks__list}>
        <li className={classes.affLinks__listItem}>
          <a href="https://www.facebook.com/cmm.1998ph/">
            <Img
              fixed={data.cmm.childImageSharp.fixed}
              alt="logo of The Center of Movement and Music"
              className={classes.affLinks__logo}
            />
          </a>
          <a
            className={classes.affLinks__textLink}
            href="https://www.facebook.com/cmm.1998ph/"
          >
            Center for Movement and Music
          </a>
        </li>
        <li className={classes.affLinks__listItem}>
          <a href="https://www.abrsm.org/">
            <Img
              fixed={data.abrsm.childImageSharp.fixed}
              alt="logo of The Associated Board of the Royal Schools of Music"
              className={classes.affLinks__logo}
            />
          </a>
          <a
            className={classes.affLinks__textLink}
            href="https://www.abrsm.org/"
          >
            Associated Board of the Royal Schools of Music (ABRSM)
          </a>
        </li>
        <li className={classes.affLinks__listItem}>
          <a href="http://www.acbaustralia.com.au/">
            <Img
              fixed={data.acb.childImageSharp.fixed}
              alt="logo of Australian based Ballet Conservatoire"
              className={classes.affLinks__logo}
            />
          </a>
          <a
            className={classes.affLinks__textLink}
            href="http://www.acbaustralia.com.au/"
          >
            Australian-based Ballet Conservatoire
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
