import React from "react";
import classes from "../../styles/navigation/footer.module.scss";
import SocialLinks from "../../constants/socialLinks";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <address>
          <div className={classes.contactDetailsContainer}>
            <h4>contact beats &amp; steps arts academy</h4>
            <hr />
            <ul className={classes.contactDetailsInfo}>
              <li>
                <ul className={classes.numbers}>
                  <li>
                    <a href="tel:579-4063">579-4063</a>
                  </li>
                  <li>
                    <a href="tel:0917-5747131">0917-574-7131</a>
                  </li>
                </ul>
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
                <Link to="/">www.beatsandsteps.ph</Link>
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
          <div className="socialMedia">
            <h4>Follow us</h4>
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
              <span className={classes.grey}>Alex Friedman</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
