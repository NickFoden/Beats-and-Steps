import React from "react";

import SocialLinks from "../../constants/socialLinks";
import { Link } from "gatsby";
import classes from "../../styles/layout/footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <address>
          <div className={classes.contactDetailsContainer}>
            <h3>contact beats &amp; steps arts academy</h3>
            <hr />
            <ul className={classes.contactDetailsInfo}>
              <li>
                <a className={classes.number} href="tel:0917-5747131">
                  0917-574-7131
                </a>
              </li>
              <li>
                <a
                  href="mailto:beatsandstepsartsacademy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  beatsandstepsartsacademy@gmail.com
                </a>
              </li>
              <li>
                <Link to="/">www.beatsandsteps.com</Link>
              </li>
              <li className={classes.grey}>
                <ul className={classes.address}>
                  <li>Marius Acropoli Building</li>
                  <li>140 Katipunan Ave Extension</li>
                  <li>St Ignatius, Quezon City</li>
                  <li>Philippines</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={classes.socialMedia}>
            <h3>Follow us</h3>
            <hr />
            <SocialLinks styleClass={classes.footerLinks} />
          </div>
        </address>
        <div className={classes.copyright}>
          <div>
            <span className={classes.grey}>
              Copyright &copy; {new Date().getFullYear()}
            </span>{" "}
            Beats &amp; Steps Arts Academy
          </div>
          <span>
            Site by{" "}
            <a
              href="https://github.com/SignetOHara"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={classes.grey}>A. Friedman</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
