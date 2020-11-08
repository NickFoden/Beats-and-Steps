import React from "react";
import logo from "../../assets/logo/dummy-logo-white.png";
import classes from "../../styles/navigation/logo.module.scss";

const Logo = props => (
  <div
    className={classes.logo}
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={logo} alt="Beats and Steps Logo" />
  </div>
);

export default Logo;
