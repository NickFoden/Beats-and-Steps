import React from "react";
import classes from "../styles/hamburger/hamburger.module.scss";

const Hamburger = ({ toggleSidebar, isOpen }) => {
  return (
    <button
      className={`${classes.hamburger} ${classes.hamburgerSqueeze} ${
        isOpen ? classes.isActive : ""
      }`}
      onClick={toggleSidebar}
      type="button"
    >
      <span className={classes.hamburgerBox}>
        <span className={classes.hamburgerInner}></span>
      </span>
    </button>
  );
};

export default Hamburger;
