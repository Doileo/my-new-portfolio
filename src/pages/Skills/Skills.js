import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    const skillsSection = document.querySelector(".skills-container");

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsSection.classList.add("visible");
          } else {
            skillsSection.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(skillsSection);

    // Trigger animation after scrolling finishes (in case of direct navbar link click)
    const onClickHandler = () => {
      setTimeout(() => {
        skillsSection.classList.add("visible");
      }, 500); // Delay to wait for scroll animation to complete
    };

    // Add event listener for clicks on navbar link to Skills section
    const skillsLink = document.querySelector("#skills-link"); // Update this selector to match your Skills link
    if (skillsLink) {
      skillsLink.addEventListener("click", onClickHandler);
    }

    // Check if Skills section is in view on page load (for direct link click)
    if (skillsSection && window.location.hash === "#skills") {
      setTimeout(() => {
        skillsSection.classList.add("visible");
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
      <div className="skills-container">
        <div className="leaf" style={{ "--delay": "0s" }}>
          <img src="/assets/images/leaf-html5.svg" alt="HTML5 skill" />
        </div>
        <div className="leaf" style={{ "--delay": "0.3s" }}>
          <img src="/assets/images/leaf-css3.svg" alt="CSS3 skill" />
        </div>
        <div className="leaf" style={{ "--delay": "0.6s" }}>
          <img
            src="/assets/images/leaf-javascript.svg"
            alt="JavaScript skill"
          />
        </div>
        <div className="leaf" style={{ "--delay": "0.9s" }}>
          <img src="/assets/images/leaf-react.svg" alt="React skill" />
        </div>
        <div className="leaf" style={{ "--delay": "1.2s" }}>
          <img
            src="/assets/images/leaf-accessibility.svg"
            alt="Accessibility skill"
          />
        </div>
        <div className="leaf" style={{ "--delay": "1.5s" }}>
          <img src="/assets/images/leaf-git.svg" alt="Git skill" />
        </div>
        <div className="leaf" style={{ "--delay": "1.8s" }}>
          <img
            src="/assets/images/leaf-responsive-design.svg"
            alt="Responsive Design skill"
          />
        </div>
        <div className="leaf" style={{ "--delay": "2.1s" }}>
          <img src="/assets/images/leaf-figma.svg" alt="Figma skill" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
