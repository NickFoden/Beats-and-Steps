import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useViewport from '../../hooks/useViewport';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {width < breakpoint ? (
        <Sidebar isOpen={isOpen} />
      ) : null}
      {children}
    </>
  );
};

export default Layout;
