import React from "react";

import classes from "./vimeoVid.module.scss";

const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <section className={classes.vimeoSection}>
      <header className={classes.vimeoContainer}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        ></iframe>
      </header>
    </section>
  );
};

export default Video;
