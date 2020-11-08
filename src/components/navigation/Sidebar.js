import React from "react";
import Links from "../../constants/links";
import SocialLinks from "../../constants/socialLinks";
import classes from "../../styles/navigation/sidebar.module.scss";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`${classes.sidebar} ${isOpen ? classes.showSidebar : ""}`}
    >
      <>
        <Links styleClass={`${isOpen ? classes.sidebarLinks : classes.disappear}`} />
        <SocialLinks styleClass={`${isOpen ? classes.sidebarIcons : classes.disappear}`} />
      </>
    </aside>
  );
};

export default Sidebar;
