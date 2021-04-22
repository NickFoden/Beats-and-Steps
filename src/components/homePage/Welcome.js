import React from "react";

import NavLink from "../navigation/NavLink";
import ballet from "../../assets/images/course-icons/ballet.svg";
import jazz from "../../assets/images/course-icons/jazz.svg";
import hiphop from "../../assets/images/course-icons/hiphop.svg";
import voice from "../../assets/images/course-icons/mic.svg";
import piano from "../../assets/images/course-icons/piano.svg";
import guitar from "../../assets/images/course-icons/guitar.svg";
import violin from "../../assets/images/course-icons/violin.svg";
import classes from "../../styles/pages/homePage/welcome.module.scss";

const Welcome = () => {
  return (
    <section className="sectionContainer">
      <div className={classes.welcomeTitleContainer}>
        <h1>Beats &amp; Steps Arts Academy</h1>
        <p>
          An affiliate of the{" "}
          <strong>Center for Movement and Music (CMM)</strong> offering courses
          in:
        </p>
      </div>
      <div>
        <div className={classes.courseList__container}>
          <NavLink link="/dance/">dance</NavLink>
          <ul className={classes.courseList__danceList}>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={ballet}
                  alt="ballet logo"
                />
              </div>
              <li>Ballet</li>
            </div>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={jazz}
                  alt="jazz logo"
                />
              </div>
              <li>Jazz</li>
            </div>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={hiphop}
                  alt="hiphop logo"
                />
              </div>
              <li>Hiphop</li>
            </div>
          </ul>
        </div>
        <div className={classes.courseList__container}>
          <NavLink link="/music/">music</NavLink>
          <ul className={classes.courseList__musicList}>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={voice}
                  alt="voice logo"
                />
              </div>
              <li>Voice</li>
            </div>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={piano}
                  alt="piano logo"
                />
              </div>
              <li>Piano</li>
            </div>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={guitar}
                  alt="guitar logo"
                />
              </div>
              <li>Guitar</li>
            </div>
            <div className={classes.courseList__element}>
              <div className={classes.courseList__iconContainer}>
                <img
                  className={classes.courseList__icon}
                  src={violin}
                  alt="violin logo"
                />
              </div>
              <li>Violin</li>
            </div>
          </ul>
        </div>
      </div>
      <div className={classes.enrollButton}>
        <NavLink link="/contact/">Enroll Here</NavLink>
      </div>
    </section>
  );
};

export default Welcome;
