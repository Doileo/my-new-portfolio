import React from "react";
import "./Projects.css";

// Array of projects
const projects = [
  {
    title: "Kids schedule organizer",
    description:
      "A mobile-first tool for parents to organize their children's daily schedules with task management and animations.",
    techStack: ["React", "CSS3"],
    github: "https://github.com/Doileo/kids-schedule-organizer",
    live: "https://kids-schedule-organizer.vercel.app/",
    image: "/assets/icons/schedule-icon.svg",
  },
  {
    title: "E-commerce product page",
    description:
      "A responsive e-commerce site with product galleries, sorting options, and interactive features like a style quiz and cart system.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Doileo/ecommerce-product-page",
    live: "https://ecommerce-product-page-ten-chi.vercel.app/",
    image: "/assets/icons/cart-icon.svg",
  },
  {
    title: "Multi-step form",
    description:
      "A dynamic form built in React, featuring multi-step navigation, real-time validation, and responsive design.",
    techStack: ["React", "CSS", "JavaScript", "React Router"],
    github: "https://github.com/Doileo/multi-step-form",
    live: "https://formnavigator.netlify.app/",
    image: "/assets/icons/form-icon.svg",
  },
  {
    title: "Newsletter form app",
    description:
      "A React app for subscribing to newsletters with email validation, error handling, and success notifications, optimized for mobile.",
    techStack: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Doileo/newsletter-form-app",
    live: "https://newsletter-form-app.netlify.app/",
    image: "/assets/icons/email-icon.svg",
  },
  {
    title: "Advice generator app",
    description:
      "A React app that fetches random advice from an API and updates with each click, demonstrating API integration and dynamic data display.",
    techStack: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/Doileo/advice-generator-app",
    live: "https://doileo.github.io/advice-generator-app/",
    image: "/assets/icons/quotation-mark-icon.svg",
  },
  {
    title: "Visualized countries app",
    description:
      "A simple React app displaying a list of countries with sorting and filtering options, fetching data from a free API.",
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
