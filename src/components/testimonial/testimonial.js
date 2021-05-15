import React from "react";
import Img from "gatsby-image";

import classes from "../../styles/pages/homePage/testimonial.module.scss";

const Testimonial = ({ quote, name, fluid, alt }) => {
  return (
    <li>
      <div className={classes.testiOuterContainer}>
        <div className={classes.testiInnerContainer}>
          <div className={classes.testiImageContainer}>
            <Img className={classes.testiImage} fluid={fluid} alt={alt} />
          </div>
          <div className={classes.testiTextContainer}>
            {quote}
            <p className={classes.testiQuote__name}>{name}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
