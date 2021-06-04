import React from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import CustomerChat from "./CustomerChat";
import Footer from "./Footer";
import useViewport from "../../hooks/useViewport";
import classes from "../../styles/layout/layout.module.scss";

/* Background pattern from Toptal Subtle Patterns */
import bgImage from "../../assets/images/white-waves.png";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const { width } = useViewport();
  const breakpoint = 1440;

  return (
    <div
      className={classes.layoutContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {width < breakpoint ? (
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      ) : null}
      <main>{children}</main>
      {/* <CustomerChat /> */}
      <Footer />
    </div>
  );
};

export default Layout;
