import React, { useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="">
      {isVisible && (
        <button
          className="scroll-to-top border border-white rounded-full"
          onClick={scrollToTop}
        >
          <IoArrowUpSharp
            style={{
              color: "white",
              fontSize: "35px",
              margin: "5px",
              padding: "5px",
              cursor: "pointer",
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
