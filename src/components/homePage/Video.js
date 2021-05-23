import React from "react";

import classes from "../../styles/pages/homePage/video.module.scss";

const Video = () => {
  return (
    <section className={classes.videoSection}>
      <header className={classes.videoContainer}>
        <iframe
          // src="https://player.cloudinary.com/embed/?public_id=intro-vid&cloud_name=beats-and-steps-dev&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bcolors%5D%5Baccent%5D=%2300ccff&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=53&player%5Bautoplay%5D=true&player%5Bloop%5D=true&playsinline=1&source%5Btransformation%5D%5B0%5D%5Bquality%5D=auto"
          src={`https://player.cloudinary.com/embed/?public_id=intro-vid&cloud_name=${process.env.GATSBY_CLOUDINARY_CLOUD_NAME}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bcolors%5D%5Baccent%5D=%2300ccff&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=53&player%5Bautoplay%5D=true&player%5Bloop%5D=true&playsinline=1&source%5Btransformation%5D%5B0%5D%5Bquality%5D=auto`}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          frameBorder="0"
          title="Beats and Steps Intro Video"
        ></iframe>
      </header>
    </section>
  );
};
export default Video;
