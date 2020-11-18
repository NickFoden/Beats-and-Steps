import React from "react";
import { Link } from "gatsby";
import classes from "../../styles/navigation/navLink.module.scss";

const NavLink = ({ children, link }) => {
  return (
    <Link className={classes.link} to={link}>
      {children}
    </Link>
  );
};

export default NavLink;
