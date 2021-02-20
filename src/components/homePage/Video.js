// Without Cloudinary

// import React from "react";

// import TestVideo from "../../assets/video/intro-video.mp4";
// // import posterImage from "../../assets/images/Logos/bigLogo.svg";
// import classes from "../../styles/pages/homePage/video.module.scss";

// const Video = () => {
//   return (
//     <video
//       autoPlay
//       muted
//       loop
//       controls
//       disablePictureInPicture
//       playsInline="playsInline"
//       // poster={posterImage}
//       className={classes.video}
//     >
//       <source src={TestVideo} type="video/mp4" />
//       <p>Your browser doesn't support HTML5 video</p>
//     </video>
//   );
// };

// export default Video;

// Cloudinary

import React from "react";

import classes from "../../styles/pages/homePage/video.module.scss";

const Video = () => {
  return (
    <header className={classes.videoContainer}>
      <div className={classes.innerContainer}>
        <iframe
          className={classes.video}
          src="https://player.cloudinary.com/embed/?public_id=intro-vid&cloud_name=beats-and-steps-dev&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bcolors%5D%5Baccent%5D=%2300ccff&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=53&player%5Bautoplay%5D=true&player%5Bloop%5D=true"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
          title="Beats and Steps Intro Video"
          scrolling="no"
        ></iframe>
      </div>
    </header>
  );
};
export default Video;
