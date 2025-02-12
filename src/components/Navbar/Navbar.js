import React, { useState } from "react";
import { useAnimation } from "../../context/AnimationContext"; // Import animation context
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { animationsEnabled, toggleAnimations } = useAnimation(); // Use global animation state

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
