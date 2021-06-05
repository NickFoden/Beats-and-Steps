import React from "react";

import CustomerChat from "./src/components/navigation/CustomerChat";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element }) => (
  <div>
    {element}
    <CustomerChat />
  </div>
);

export default wrapPageElement;
