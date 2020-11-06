import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;
