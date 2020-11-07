import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import classes from "../styles/links/socialLinks.module.scss";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/beatsandstepsartsacademy/",
  },
  {
    id: 2,
    icon: <FaInstagramSquare />,
    url: "https://www.instagram.com/beatsandstepsartsacademy/?hl=en",
  },
];
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className={classes.socialLink}>
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`${classes.socialLinks} ${styleClass ? styleClass : ""}`}>
      {links}
    </ul>
  );
};
