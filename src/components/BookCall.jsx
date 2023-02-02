import styles from "../style"
import React, {useEffect, useRef, useState} from "react";

function BookCall() {
  const buttonRef = useRef(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      
      buttonRef.current.addEventListener("click", function() {
        Calendly.showPopupWidget('https://calendly.com/studioix-agency?hide_gdpr_banner=1&background_color=3E4581&text_color=FFFFFF&primary_color=3E72FF');
      });

    }, []);
  
  return (
    <>
     <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <button ref={buttonRef} type="button" className={`py-4 px-6 bt-blue-gradient font-poppins font-medium text-[18px] w-[180px] text-white outline-none rounded-[10px] ${styles}`}>
          Book Call
      </button>
    </>
  );
}

export default BookCall;