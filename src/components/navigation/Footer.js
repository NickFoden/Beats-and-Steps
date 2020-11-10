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
            <h3>contact beats &amp; steps arts academy</h3>
            <hr />
            <ul className={classes.contactDetailsInfo}>
              <li className={classes.grey}>+63917 574 7131</li>
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
                Marius Acropoli Building, 140 Katipunan Ave. Extension, St.
                Ignatius Quezon City, Philippines
              </li>
            </ul>
          </div>
          <div className="socialMedia">
            <h3>Follow us!</h3>
            <hr />
            <SocialLinks styleClass={classes.footerLinks}/>
          </div>
        </address>
        <div className={classes.copyright}>
          <div>
            <span className={classes.grey}>
              Copyright &copy; {new Date().getFullYear()}
            </span>{" "}
            Beats and Steps Arts Academy
          </div>
          <span>
            <a
              href
              to="https://github.com/SignetOHara"
              rel="noopener noreferrer"
            >
              Site by <span className={classes.grey}>Alex Friedman</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
