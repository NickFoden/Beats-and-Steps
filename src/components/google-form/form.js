import React from "react";

const Form = () => {
  const scrollToTop = () => {
    if (window.myFrameChange !== undefined) {
      window.parent.document.getElementById("form").scrollIntoView();
     }
    window.myFrameChange = true;
  };

  return (
    <iframe
      id="form"
      title="Enrollment Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLScxhTEMUyFIZXzklLmrBzAYJ8f-h4FG8bAAAQhG469vySSFVA/viewform?embedded=true"
      width="100%"
      height="1250"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      onLoad={scrollToTop}
    >
      Loading…
    </iframe>
  );
};

export default Form;
