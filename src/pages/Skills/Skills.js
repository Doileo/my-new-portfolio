import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    const skillsSection = document.querySelector(".skills-container");
    const leaves = document.querySelectorAll(".leaf");

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsSection.classList.add("visible");
            leaves.forEach((leaf, index) => {
              leaf.classList.add("visible");
              leaf.style.animationDelay = `${0.3 * index}s`; // Staggered delay for each leaf
            });
          } else {
            skillsSection.classList.remove("visible");
            leaves.forEach((leaf) => {
              leaf.classList.remove("visible");
              leaf.style.animationDelay = "0s"; // Reset delay
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(skillsSection);

    // Trigger animation after clicking the navbar link
    const onClickHandler = () => {
      setTimeout(() => {
        skillsSection.classList.add("visible");
        leaves.forEach((leaf, index) => {
          leaf.classList.add("visible");
          leaf.style.animationDelay = `${0.3 * index}s`; // Staggered delay
        });
      }, 500); // Delay to wait for scroll animation to complete
    };

    // Add event listener for clicks on navbar link to Skills section
    const skillsLink = document.querySelector("#skills-link");
    if (skillsLink) {
      skillsLink.addEventListener("click", onClickHandler);
    }

    // Check if Skills section is in view on page load (for direct link click)
    if (skillsSection && window.location.hash === "#skills") {
      setTimeout(() => {
        skillsSection.classList.add("visible");
        leaves.forEach((leaf, index) => {
          leaf.classList.add("visible");
          leaf.style.animationDelay = `${0.3 * index}s`; // Staggered delay
        });
      }, 500);
    }

    return () => {
      observer.disconnect();
      if (skillsLink) {
        skillsLink.removeEventListener("click", onClickHandler);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">My Skills</h2>
      <p className="skills-intro">
        I believe that skills are not just tools but the building blocks of
        impactful projects. Over time, I’ve cultivated these skills through
        curiosity, persistence, and a passion for creating meaningful solutions.
      </p>
      <div className="skills-container">
        <div className="leaf">
          <img src="/assets/images/leaf-html5.svg" alt="HTML5 skill" />
        </div>
        <div className="leaf">
          <img src="/assets/images/leaf-css3.svg" alt="CSS3 skill" />
        </div>
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
