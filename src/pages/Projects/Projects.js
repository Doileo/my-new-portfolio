import React from "react";
import "./Projects.css";

// Array of projects
const projects = [
  {
    title: "Kids Schedule Organizer",
    description:
      "A mobile-first application designed to help parents manage their children's daily routines, complete with task tracking and interactive animations.",
    techStack: ["React", "CSS3"],
    github: "https://github.com/Doileo/kids-schedule-organizer",
    live: "https://kids-schedule-organizer.vercel.app/",
    image: "/assets/icons/schedule-icon.svg",
  },
  {
    title: "E-Commerce Product Page",
    description:
      "A fully responsive e-commerce page featuring product galleries, sorting functionality, and engaging features like a style quiz and shopping cart.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Doileo/ecommerce-product-page",
    live: "https://ecommerce-product-page-ten-chi.vercel.app/",
    image: "/assets/icons/cart-icon.svg",
  },
  {
    title: "Multi-Step Form",
    description:
      "A dynamic React form offering a seamless multi-step experience, real-time validation, and a mobile-friendly layout.",
    techStack: ["JavaScript", "React", "React Router", "CSS"],
    github: "https://github.com/Doileo/multi-step-form",
    live: "https://formnavigator.netlify.app/",
    image: "/assets/icons/form-icon.svg",
  },
  {
    title: "Newsletter Subscription App",
    description:
      "A React-based newsletter sign-up platform featuring email validation, error handling, and success messages, optimized for mobile devices.",
    techStack: ["JavaScript", "React", "CSS"],
    github: "https://github.com/Doileo/newsletter-form-app",
    live: "https://newsletter-form-app.netlify.app/",
    image: "/assets/icons/email-icon.svg",
  },
  {
    title: "Advice Generator",
    description:
      "A React app that pulls random advice from an API with each click, showcasing API integration and dynamic content updating.",
    techStack: ["JavaScript", "React", "CSS", "API Integration"],
    github: "https://github.com/Doileo/advice-generator-app",
    live: "https://doileo.github.io/advice-generator-app/",
    image: "/assets/icons/quotation-mark-icon.svg",
  },
  {
    title: "Visualized Countries App",
    description:
      "A React app that displays a list of countries, with the ability to sort and filter data, fetching information from a free API.",
    techStack: ["React", "CSS"],
    github: "https://github.com/Doileo/visualized-countries-app",
    live: "https://yourusername.github.io/project-six/",
    image: "/assets/icons/map-icon.svg",
  },
];

const Projects = () => {
  return (
    <>
      {/* Leaf Divider */}
      <div className="leaf-divider" aria-hidden="true">
        <img
          src="/assets/images/leaf-divider.png"
          alt=""
          className="leaf-divider-image"
        />
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects"
        aria-labelledby="projects-heading"
      >
        <div className="projects-container">
          <h2 id="projects-heading" className="projects-title">
            My Projects
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* Icon and Title */}
                <div className="project-header">
                  <div className="project-icon">
                    <img src={project.image} alt={`${project.title} icon`} />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
