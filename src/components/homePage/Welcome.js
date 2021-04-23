import React from "react";
import { Link } from "gatsby";

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
      <div className={classes.courses}>
        <div className={classes.courseList__container}>
          <NavLink link="/dance/">dance</NavLink>
          <ul className={classes.courseList__danceList}>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/dance/#ballet">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={ballet}
                    alt="ballet logo"
                  />
                </div>
                <p>Ballet</p>
              </Link>
            </li>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/dance/#jazz">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={jazz}
                    alt="jazz logo"
                  />
                </div>
                <p>Jazz</p>
              </Link>
            </li>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/dance/#hiphop">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={hiphop}
                    alt="hiphop logo"
                  />
                </div>
                <p>Hiphop</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.courseList__container}>
          <NavLink link="/music/">music</NavLink>
          <ul className={classes.courseList__musicList}>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/music/#voice">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={voice}
                    alt="voice logo"
                  />
                </div>
                <p>Voice</p>
              </Link>
            </li>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/music/#piano">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={piano}
                    alt="piano logo"
                  />
                </div>
                <p>Piano</p>
              </Link>
            </li>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/music/#guitar">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={guitar}
                    alt="guitar logo"
                  />
                </div>
                <p>Guitar</p>
              </Link>
            </li>
            <li className={classes.courseList__element}>
              <Link className={classes.courseList__anchor} to="/music/#violin">
                <div className={classes.courseList__iconContainer}>
                  <img
                    className={classes.courseList__icon}
                    src={violin}
                    alt="violin logo"
                  />
                </div>
                <p>Violin</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.enrollButton}>
        <NavLink link="/contact/#form">Enroll Here</NavLink>
      </div>
    </section>
  );
};

export default Welcome;
