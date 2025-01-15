// src/components/SocialIcons/SocialIcons.js
import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/doinaleovchindeveloper/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Visit LinkedIn profile"
      >
        <img
          src="/assets/icons/linkedin-icon.svg"
          alt="LinkedIn profile"
          width="30"
          height="30"
        />
      </a>
      <a
        href="https://github.com/Doileo"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Visit GitHub profile"
      >
        <img
          src="/assets/icons/github-icon.svg"
          alt="GitHub profile"
          width="30"
          height="30"
        />
      </a>
      <button
        className="social-icon back-to-top"
        onClick={scrollToTop}
        aria-label="Scroll back to the top of the page"
      >
        <span
          className="arrow-up"
          role="img"
          aria-label="Back to top arrow"
        ></span>{" "}
        {/* CSS Arrow */}
      </button>
    </div>
  );
};

export default SocialIcons;
