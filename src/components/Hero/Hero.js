import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = [
    "<tech with heart />",
    "<code with heart />",
    "<collaborates with heart />",
  ];

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
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I'm Doina.
        </motion.h1>

        {/* Smooth changing text with framer motion */}
        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
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
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {phrases[textIndex]}
          </motion.span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="btn btn-download-cv">Download CV</button>
          <button className="btn btn-contact">Contact</button>
        </motion.div>
      </div>

      {/* Right Column for the Flower Image */}
      <motion.div
        className="hero-image"
        animate={{
          scale: [0, 1], // From small to normal size (blooming effect)
          opacity: [0, 1], // Fade in from 0 to full opacity
        }}
        transition={{
          duration: 3, // Duration of the blooming effect
          ease: "easeOut",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/hero-image.svg"}
          alt="Animated flower blooming"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
