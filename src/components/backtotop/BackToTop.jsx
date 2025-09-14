import React, { useState, useEffect } from "react";
import "../../style/BackToTop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detect karna
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </>
  );
}

export default BackToTop;
