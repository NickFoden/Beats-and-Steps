import React from "react";
import ViewportProvider from "./src/hoc/ViewportProvider";

export const wrapRootElement = ({ element }) => {
  return <ViewportProvider>{element}</ViewportProvider>;
};
