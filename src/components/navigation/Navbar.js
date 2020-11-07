import React from "react";
import classes from "../../styles/navigation/navbar.module.scss";
import Logo from "../navigation/Logo";
import PageLinks from "../../constants/links";
import Hamburger from "../navigation/Hamburger";
import { Link } from "gatsby";

const Navbar = ({ toggleSidebar, isOpen }) => {

  

  return (
    <nav className={classes.navbar}>
      <Link to="/" style={{ height: "80%" }}>
        <Logo />
      </Link>
      <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <PageLinks styleClass={classes.navLinks} />
    </nav>
  );
};

export default Navbar;
