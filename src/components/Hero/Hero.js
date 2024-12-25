import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BloomingFlower from "./BloomingFlower"; // Import BloomingFlower
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Initialize based on current screen size
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches; // Check if user prefers reduced motion
  const phrases = [
    "<tech with heart />",
    "<code with heart />",
    "<collaborates with heart />",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Update state based on screen size
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [phrases.length]);

  return (
    <section className="hero-section">
      {/* Left Column for Heading, Subheading, and Buttons */}
      <div className="hero-text-container">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
          transition={{ delay: 0.5, duration: prefersReducedMotion ? 0 : 1 }}
        >
          Hi, I'm Doina.
        </motion.h1>

        {/* Smooth changing text with framer motion */}
        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
          transition={{
            delay: 1,
            duration: prefersReducedMotion ? 0 : 1,
            ease: "easeOut",
          }}
        >
          A Front-end Developer who{" "}
          <motion.span
            key={phrases[textIndex]} // This ensures smooth transition between the phrases
            initial={{ opacity: 0, y: 20 }} // Start below and fade in
            animate={{
              opacity: 1,
              y: 0, // Move to original position
            }}
            exit={{ opacity: 0, y: 20 }} // Fade out and move down
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              ease: "easeOut",
            }}
          >
            {phrases[textIndex]}
          </motion.span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
          transition={{ delay: 1.5, duration: prefersReducedMotion ? 0 : 1 }}
        >
          <button className="btn btn-download-cv">Download CV</button>
          <button className="btn btn-contact">Contact</button>
        </motion.div>
      </div>

      {/* Right Column for the Flower Image */}
      <motion.div
        className="hero-image"
        animate={{
          scale: prefersReducedMotion ? [1] : [0, 1], // No scaling animation if prefers reduced motion
          opacity: prefersReducedMotion ? [1] : [0, 1], // No fade-in animation if prefers reduced motion
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 3, // Skip transition duration if prefers reduced motion
          ease: "easeOut",
        }}
      >
        {/* Conditionally render BloomingFlower only on desktop */}
        {isDesktop ? (
          <BloomingFlower />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/assets/images/hero-image.svg"}
            alt="Static flower"
          />
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
