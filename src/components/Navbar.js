import React from "react";
import classes from "../styles/navbar.module.scss";
import Logo from "../assets/logo/dummy-logo.png";
import Hamburger from "../components/Hamburger";
import PageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <Link className={classes.navLogo} to="/">
            <img src={Logo} alt="Beats and Steps Logo" />
          </Link>
          <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />
        </div>
        <PageLinks styleClass={classes.navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
