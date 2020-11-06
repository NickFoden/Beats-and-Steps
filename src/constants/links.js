import React from "react";
import { Link } from "gatsby";

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

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
