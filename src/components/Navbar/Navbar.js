import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
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
          href="#home"
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#contact"
          className="navbar-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
