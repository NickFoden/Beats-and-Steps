import React from "react";
import Img from "gatsby-image";

import classes from "../../styles/pages/homePage/testimonial.module.scss";

const Testimonial = ({ quote, name, fixed, alt }) => {
  return (
    <li>
      <div className={classes.testiOuterContainer}>
        <div className={classes.testiInnerContainer}>
          <div className={classes.testiImageContainer}>
            <Img className={classes.testiImage} fixed={fixed} alt={alt} />
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
