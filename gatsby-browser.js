import React from "react";
import ViewportProvider from "./src/hoc/ViewportProvider";
import "./src/styles/main.scss";

export const wrapRootElement = ({ element }) => {
  return <ViewportProvider>{element}</ViewportProvider>;
};
