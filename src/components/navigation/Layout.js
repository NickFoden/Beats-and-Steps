import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import useViewport from "../../hooks/useViewport";
import classes from '../../styles/navigation/layout.module.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const { width } = useViewport();
  const breakpoint = 1024;


  return (
    <div className={classes.layoutContainer}>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {width < breakpoint ? <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
