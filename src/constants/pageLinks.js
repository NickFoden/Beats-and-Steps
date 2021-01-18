import React from "react";
import { Link } from "gatsby";
import classes from "../styles/layout/navbar.module.scss";
import styles from "../styles/layout/sidebar.module.scss";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "music",
    url: "/music/",
  },
  {
    id: 3,
    text: "dance",
    url: "/dance/",
  },
  {
    id: 4,
    text: "about us",
    url: "/about/",
  },
  {
    id: 5,
    text: "faculty",
    url: "/faculty/",
  },
  {
    id: 6,
    text: "contact us",
    url: "/contact/",
  },
];

export default ({ styleClass, toggleSidebar }) => {
  const tempLinks = data.map(link => {
    return (
      <Link
        key={link.id}
        to={link.url}
        onClick={toggleSidebar}
        className={
          styleClass === classes.navLinks ? classes.navLink : classes.sideLink
        }
        activeClassName={
          styleClass === classes.navLinks
            ? classes.active
            : styles.sidebarActive
        }
      >
        {link.text}
      </Link>
    );
  });

  return <div className={`${styleClass ? styleClass : ""}`}>{tempLinks}</div>;
};
