import React from "react";

import CustomerChat from "./src/components/navigation/CustomerChat";

const wrapPageElement = ({ element }) => (
  <div>
    {element}
    <CustomerChat />
  </div>
);

export default wrapPageElement;
