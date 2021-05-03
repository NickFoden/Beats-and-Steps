import React from "react";

import Logo from "./Logo";
import PageLinks from "../../constants/pageLinks";
import Hamburger from "./Hamburger";
import useViewport from "../../hooks/useViewport";
import classes from "../../styles/layout/navbar.module.scss";

const Navbar = ({ toggleSidebar, isOpen }) => {
  const { width } = useViewport();
  const breakpoint = 1440;

  return (
    <nav className={classes.navbar}>
      {width < breakpoint ? (
        <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />
      ) : null}
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      {width >= breakpoint ? (
        <div className={classes.navLinksContainer}>
          <PageLinks styleClass={classes.navLinks} />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
