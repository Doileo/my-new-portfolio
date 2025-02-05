import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="footer">
      {/* Leaf Divider */}
      <div className="leaf-divider" aria-hidden="true">
        <img
          src="/assets/images/leaf-divider.png"
          alt=""
          className="leaf-divider-image"
        />
      </div>
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>
          © {new Date().getFullYear()} Doina |{" "}
          <strong>Frontend Developer</strong> with a passion for elegant &
          accessible design. <span className="heart">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
