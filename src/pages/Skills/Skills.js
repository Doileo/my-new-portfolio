import React, { useEffect } from "react";
import { useAnimation } from "../../context/AnimationContext";
import "./Skills.css";

const Skills = () => {
  const { animationsEnabled } = useAnimation(); // Get animation state

  useEffect(() => {
    const skillsSection = document.querySelector(".skills-container");
    const leaves = document.querySelectorAll(".leaf");

    if (!animationsEnabled) {
      // Ensure the leaves are visible without animation
      skillsSection.classList.add("visible"); // Add visibility
      leaves.forEach((leaf) => {
        leaf.classList.add("visible"); // Make leaves visible
        leaf.style.animation = "none"; // Disable animation
        leaf.style.transition = "none"; // Disable transition if any
      });
      return;
    }

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsSection.classList.add("visible");
            leaves.forEach((leaf, index) => {
              leaf.classList.add("visible");
              leaf.style.animationDelay = `${0.3 * index}s`;
            });
          } else {
            skillsSection.classList.remove("visible");
            leaves.forEach((leaf) => {
              leaf.classList.remove("visible");
              leaf.style.animationDelay = "0s";
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(skillsSection);

    // Handle navbar click to trigger animations
    const onClickHandler = () => {
      if (!animationsEnabled) return; // Don't animate if disabled
      setTimeout(() => {
        skillsSection.classList.add("visible");
        leaves.forEach((leaf, index) => {
          leaf.classList.add("visible");
          leaf.style.animationDelay = `${0.3 * index}s`;
        });
      }, 500);
    };

    const skillsLink = document.querySelector("#skills-link");
    if (skillsLink) {
      skillsLink.addEventListener("click", onClickHandler);
    }

    // Check if section is in view on load
    if (
      skillsSection &&
      window.location.hash === "#skills" &&
      animationsEnabled
    ) {
      setTimeout(() => {
        skillsSection.classList.add("visible");
        leaves.forEach((leaf, index) => {
          leaf.classList.add("visible");
          leaf.style.animationDelay = `${0.3 * index}s`;
        });
      }, 500);
    }

    return () => {
      observer.disconnect();
      if (skillsLink) {
        skillsLink.removeEventListener("click", onClickHandler);
      }
    };
  }, [animationsEnabled]); // Re-run effect when animationsEnabled changes

  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">My Skills</h2>
      <p className="skills-intro">
        I believe that skills are not just tools but the building blocks of
        impactful projects. Over time, I’ve cultivated these skills through
        curiosity, persistence, and a passion for creating meaningful solutions.
      </p>
      <div
        className={`skills-container ${
          animationsEnabled ? "" : "no-animation"
        }`}
      >
        <div className="leaf">
          <img
            src="/assets/images/leaf-javascript.svg"
            alt="JavaScript skill"
          />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-react.svg" alt="React skill" />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-html5.svg" alt="HTML5 skill" />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-css3.svg" alt="CSS3 skill" />
        </div>
        <div className="leaf">
          <img
            src="/assets/images/leaf-accessibility.svg"
            alt="Accessibility skill"
          />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-git.svg" alt="Git skill" />
        </div>
        <div className="leaf">
          <img
            src="/assets/images/leaf-responsive-design.svg"
            alt="Responsive Design skill"
          />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-figma.svg" alt="Figma skill" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
