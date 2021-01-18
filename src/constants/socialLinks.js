import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import classes from "../styles/components/socialLinks.module.scss";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare style={{ color: "#4267B2" }} />,
    url: "https://www.facebook.com/beatsandstepsartsacademy/",
    label: "Beats and Steps Facebook",
  },
  {
    id: 2,
    icon: (
      <FaInstagram
        style={{
          color: "#fff",
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          borderRadius: "5px",
        }}
      />
    ),
    url: "https://www.instagram.com/beatsandstepsartsacademy/?hl=en",
    label: "Beats and Steps Instagram",
  },
  {
    id: 3,
    icon: <FaYoutube style={{ color: "#FF0000" }} />,
    url: "https://www.youtube.com/channel/UCtKuwwRznJUdD2qWHuTw6vQ/featured",
    label: "Beats and Steps Youtube",
  },
  {
    id: 4,
    icon: <FaEnvelope style={{ color: "#BC9E82" }} />,
    url: "mailto:beatsandstepsartsacademy@gmail.com",
    label: "Beats and Steps Email",
  },
];
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className={classes.socialLink}
        aria-label={link.label}
        target="_blank"
        rel="noopener noreferrer"
      >
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
