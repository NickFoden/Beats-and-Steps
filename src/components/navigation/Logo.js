import React from "react";

import logo from "../../assets/images/Logos/dummy-logo-white.png";
import classes from "../../styles/components/logo.module.scss";

const Logo = props => (
  <div
    className={classes.logo}
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={logo} alt="Beats and Steps Arts Academy Logo" />
  </div>
);

export default Logo;
