import React from "react";
import { Link } from "gatsby";
import classes from '../styles/navigation/navbar.module.scss';
import styles from '../styles/navigation/sidebar.module.scss';

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about us",
    url: "/about/",
  },
  {
    id: 3,
    text: "dance",
    url: "/dance/",
  },
  {
    id: 4,
    text: "music",
    url: "/music/",
  },
  {
    id: 5,
    text: "contact us",
    url: "/contact/",
  },
];

export default ({ styleClass }) => {
  const tempLinks = data.map(link => {
    return (
      <Link
        key={link.id}
        to={link.url}
        className={
          styleClass === classes.navLinks ? classes.navLink : classes.sideLink
        }
        activeClassName={styleClass === classes.navLinks ? classes.active : styles.active}
      >
        {link.text}
      </Link>
    );
  });

  return <div className={`${styleClass ? styleClass : ""}`}>{tempLinks}</div>;
};