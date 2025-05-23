import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../../context/AnimationContext"; // Import animation context
import BloomingFlower from "./BloomingFlower";
import Resume from "./Resume";
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const { animationsEnabled } = useAnimation(); // Use animation context state
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const phrases = [
    "<tech with heart />",
    "<code with heart />",
    "<collaborates with heart />",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!animationsEnabled) return; // Stop text changing when animations are disabled

    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animationsEnabled, phrases.length]);

  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationsEnabled ? 1 : 1 }}
          transition={{ delay: 0.5, duration: animationsEnabled ? 1 : 0 }}
        >
          Hi, I'm Doina.
        </motion.h1>

        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationsEnabled ? 1 : 1 }}
          transition={{
            delay: 1,
            duration: animationsEnabled ? 1 : 0,
            ease: "easeOut",
          }}
        >
          A Front-end Developer who{" "}
          <motion.span
            key={phrases[textIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: animationsEnabled ? 0 : 0, // Keep text stable if animations are off
            }}
            transition={{
              duration: animationsEnabled ? 1 : 0,
              ease: "easeOut",
            }}
          >
            {phrases[textIndex]}
          </motion.span>
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationsEnabled ? 1 : 1 }}
          transition={{ delay: 1.5, duration: animationsEnabled ? 1 : 0 }}
        >
          {/* Resume component */}
          <Resume />
          <button
            className="btn btn-contact"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        animate={{
          scale: animationsEnabled ? [0, 1] : 1,
          opacity: animationsEnabled ? [0, 1] : 1,
        }}
        transition={{
          duration: animationsEnabled ? 3 : 0,
          ease: "easeOut",
        }}
      >
        {isDesktop ? (
          <BloomingFlower />
        ) : (
          <img src="/assets/images/hero-image.svg" alt="Static flower" />
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
