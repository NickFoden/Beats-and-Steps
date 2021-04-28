import React from "react";

import classes from "../form.module.scss";

const Failure = () => {
  return (
    <section className={classes.stepContainer}>
      <div className={classes.failureContainer}>
        <p>The form was unable to send. Please use the facebook Live chat to enroll directly or call: 0917 574 7131</p>
      </div>
    </section>
  );
};

export default Failure;
