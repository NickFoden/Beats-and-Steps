import React from "react";

import { viewportContext } from "../hoc/ViewportProvider";

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

export default useViewport;
