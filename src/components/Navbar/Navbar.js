import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  return (
    <nav className={`navbar ${animationsEnabled ? "animations-enabled" : ""}`}>
      {/* Logo Section */}
      <a href="#home" className="navbar-logo" aria-label="Go to home">
        <img src="/assets/images/tech-with-heart-logo.png" alt="Logo" />
      </a>

      {/* Hamburger Menu */}
      <button
        className={`navbar-hamburger ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#about"
          className={`navbar-link ${animationsEnabled ? "animated" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={`navbar-link ${animationsEnabled ? "animated" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`navbar-link ${animationsEnabled ? "animated" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={`navbar-link ${animationsEnabled ? "animated" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>

        {/* Toggle Animations Button inside the navigation links */}
        <button
          className="navbar-toggle-animations"
          onClick={toggleAnimations}
          aria-label="Toggle Animations"
        >
          {animationsEnabled ? "Animations On" : "Animations Off"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
