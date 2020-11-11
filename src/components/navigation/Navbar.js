import React from "react";
import classes from "../../styles/navigation/navbar.module.scss";
import Logo from "./Logo";
import PageLinks from "../../constants/links";
import Hamburger from "./Hamburger";
import { Link } from "gatsby";
import useViewport from "../../hooks/useViewport";

const Navbar = ({ toggleSidebar, isOpen }) => {
  const { width } = useViewport();
  const breakpoint = 769;

  return (
    <nav className={classes.navbar}>
      {width < breakpoint ? (
        <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />
      ) : null}
      <Link to="/" style={{ height: "100%" }}>
        <Logo />
      </Link>
      {width >= breakpoint ? <PageLinks styleClass={classes.navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

// {width < breakpoint ? (
//   <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />
// ) : (
//   <PageLinks styleClass={classes.navLinks} />
// )}
