import React from "react";
import "./Projects.css";

// Array of projects
const projects = [
  {
    title: "Kids Schedule Organizer",
    description:
      "A mobile-friendly planner for parents to organize their children's daily activities with data persistence via local storage. Overcame the challenge of ensuring tasks persist after refresh with a user-friendly interface.",
    techStack: ["React", "CSS3"],
    github: "https://github.com/Doileo/kids-schedule-organizer",
    live: "https://kids-schedule-organizer.vercel.app/",
    image: "/assets/icons/schedule-icon.svg",
  },
  {
    title: "E-Commerce Product Page",
    description:
      "A product page with dynamic cart management, responsive image gallery, and smooth UI interactions. Tackled the challenge of creating an intuitive shopping experience with optimized cart management and UI.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Doileo/ecommerce-product-page",
    live: "https://ecommerce-product-page-ten-chi.vercel.app/",
    image: "/assets/icons/cart-icon.svg",
  },
  {
    title: "Multi-Step Form",
    description:
      "A fully accessible form with real-time validation, error handling, and a progress tracker. Ensured smooth step navigation while keeping data persistent and validating inputs on the go.",
    techStack: ["JavaScript", "React", "React Router", "CSS"],
    github: "https://github.com/Doileo/multi-step-form",
    live: "https://formnavigator.netlify.app/",
    image: "/assets/icons/form-icon.svg",
  },
  {
    title: "Newsletter Subscription App",
    description:
      "An email signup system with real-time validation and instant user feedback for a seamless subscription process. Focused on clear error handling and accessibility.",
    techStack: ["JavaScript", "React", "CSS"],
    github: "https://github.com/Doileo/newsletter-form-app",
    live: "https://newsletter-form-app.netlify.app/",
    image: "/assets/icons/email-icon.svg",
  },
  {
    title: "Advice Generator",
    description:
      "An interactive app that fetches random advice from an API and dynamically updates the UI with each click. Addressed the challenge of smooth API data fetching and UI updates.",
    techStack: ["JavaScript", "React", "CSS", "API Integration"],
    github: "https://github.com/Doileo/advice-generator-app",
    live: "https://doileo.github.io/advice-generator-app/",
    image: "/assets/icons/quotation-mark-icon.svg",
  },
  {
    title: "Visualized Countries App",
    description:
      "A React app that displays a list of countries, with sorting and filtering capabilities. Data is fetched from a free API, and performance is optimized through React state management and efficient search functionality.",
    techStack: ["React", "CSS"],
    github: "https://github.com/Doileo/visualized-countries-app",
    live: "https://visualized-countries-app.vercel.app/",
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
