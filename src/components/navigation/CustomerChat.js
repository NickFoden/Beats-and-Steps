import React, { useEffect } from "react";

import classes from "../../styles/components/CustomerChat.module.scss";

function CustomerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v11.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
  return (
    <>
      <div className={classes.chat} id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id={process.env.GATSBY_FB_APP_ID}
      />
    </>
  );
}

export default CustomerChat;
