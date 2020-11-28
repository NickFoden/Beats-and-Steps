import React from "react";
import PageLinks from "../../constants/pageLinks";
import SocialLinks from "../../constants/socialLinks";
import classes from "../../styles/navigation/sidebar.module.scss";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${classes.sidebar} ${isOpen ? classes.showSidebar : ""}`}
    >
      <>
        <PageLinks
          styleClass={`${isOpen ? classes.sidebarLinks : classes.disappear}`}
          toggleSidebar={toggleSidebar}
        />
        <SocialLinks
          styleClass={`${isOpen ? classes.sidebarIcons : classes.disappear}`}
        />
      </>
    </aside>
  );
};

export default Sidebar;
