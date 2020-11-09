import React from "react";
import classes from "../../styles/navigation/footer.module.scss";
import SocialLinks from '../../constants/socialLinks';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>find us</h2>
      <SocialLinks />

    </footer>
  );
};

export default Footer;
