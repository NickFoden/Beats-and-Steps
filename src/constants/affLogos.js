import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import classes from "../styles/components/affLogos.module.scss";

export const getImages = graphql`
  {
    cmm: file(relativePath: { eq: "Logos/CMM.jpg" }) {
      childCloudinaryAsset {
        fixed(width: 70, height: 70) {
          ...CloudinaryAssetFixed
        }
      }
    }
    abrsm: file(relativePath: { eq: "Logos/ABRSM.jpg" }) {
      childCloudinaryAsset {
        fixed(width: 70, height: 70) {
          ...CloudinaryAssetFixed
        }
      }
    }
    acb: file(relativePath: { eq: "Logos/ACB.jpg" }) {
      childCloudinaryAsset {
        fixed(width: 70, height: 70) {
          ...CloudinaryAssetFixed
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(getImages);

  return (
    <div className={classes.affLinksContainer}>
      <ul className={classes.affLinks__list}>
        <li className={classes.affLinks__listItem}>
          <a
            className={classes.affLinks__anchor}
            href="https://www.facebook.com/cmm.1998ph/"
          >
            <Img
              fixed={data.cmm.childCloudinaryAsset.fixed}
              alt="logo of The Center of Movement and Music"
              className={classes.affLinks__logo}
            />
            <p href="https://www.facebook.com/cmm.1998ph/">
              Center for Movement and Music
            </p>
          </a>
        </li>
        <li className={classes.affLinks__listItem}>
          <a className={classes.affLinks__anchor} href="https://www.abrsm.org/">
            <Img
              fixed={data.abrsm.childCloudinaryAsset.fixed}
              alt="logo of The Associated Board of the Royal Schools of Music"
              className={classes.affLinks__logo}
            />

            <p href="https://www.abrsm.org/">
              Associated Board of the Royal Schools of Music (ABRSM)
            </p>
          </a>
        </li>
        <li className={classes.affLinks__listItem}>
          <a
            className={classes.affLinks__anchor}
            href="http://www.acbaustralia.com.au/"
          >
            <Img
              fixed={data.acb.childCloudinaryAsset.fixed}
              alt="logo of Australian based Ballet Conservatoire"
              className={classes.affLinks__logo}
            />

            <p href="http://www.acbaustralia.com.au/">Ballet Conservatoire</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
