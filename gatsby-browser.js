import React from "react";
import ViewportProvider from "./src/hoc/ViewportProvider";
import CustomLayout from "./wrapPageElement";

import "@fontsource/quicksand";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

import "@fontsource/sacramento";
import "./src/styles/main.scss";

export const wrapRootElement = ({ element }) => {
  return <ViewportProvider>{element}</ViewportProvider>;
};

export const wrapPageElement = CustomLayout;
