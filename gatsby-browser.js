import React from "react";
import ViewportProvider from "./src/hoc/ViewportProvider";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/sacramento";
import "./src/styles/main.scss";

export const wrapRootElement = ({ element }) => {
  return <ViewportProvider>{element}</ViewportProvider>;
};
