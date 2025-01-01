import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Kids schedule organizer",
    description:
      "A tool to help parents organize and manage their children's daily schedules, featuring task management, animations, and a mobile-first design.",
    techStack: ["React", "CSS3", "JavaScript", "Lighthouse"],
    github: "https://github.com/Doileo/kids-schedule-organizer",
    live: "https://kids-schedule-organizer.vercel.app/",
    image: "",
  },
  {
    title: "E-commerce product page",
    description:
      "A fully responsive e-commerce website featuring a product gallery, sorting options, detailed product pages, a lightbox gallery, and a user-friendly cart system. The project includes additional functionality such as sorting products by category, a 'Back to Top' feature, and interactive elements like a style quiz.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Doileo/ecommerce-product-page",
    live: "https://ecommerce-product-page-ten-chi.vercel.app/",
    image: "",
  },
  {
    title: "Multi-step form",
    description:
      "A dynamic, multi-step form built with React. This project allows users to fill out a form in multiple steps, with validation at each stage, offering a seamless user experience. Features include real-time form validation, conditional rendering based on user input, and a responsive design.",
    techStack: [
      "React",
      "CSS",
      "JavaScript",
      "Form Validation",
      "Responsive Design",
      "React Router",
    ],
    github: "https://github.com/Doileo/multi-step-form",
    live: "https://formnavigator.netlify.app/",
    image: "",
  },
  {
    title: "Newsletter form app",
    description:
      "A React-based web application allowing users to subscribe to a newsletter. It includes features like email input validation, error handling, and a success message upon successful submission. The app adapts to various screen sizes, ensuring a smooth mobile-first experience.",
    techStack: ["React", "CSS", "HTML5", "JavaScript", "Responsive Design"],
    github: "https://github.com/Doileo/newsletter-form-app",
    live: "https://newsletter-form-app.netlify.app/",
    image: "",
  },
  {
    title: "Advice generator app",
    description:
      "A React app that fetches random advice from an API and displays it to users. The app allows users to refresh and receive a new piece of advice with each click, showcasing how to work with external APIs and dynamically display data.",
    techStack: [
      "React",
      "JavaScript",
      "CSS",
      "API Integration",
      "Responsive Design",
    ],
    github: "https://github.com/Doileo/advice-generator-app",
    live: "https://doileo.github.io/advice-generator-app/",
    image: "",
  },
  {
    title: "Visualized countries app",
    description:
      "A simple React app that displays a list of countries, fetching data from a free API. The app allows sorting by name and filtering by region or area size.",
    techStack: ["React", "CSS", "Flexbox", "Mobile-first design"],
    github: "https://github.com/Doileo/visualized-countries-app",
    live: "https://yourusername.github.io/project-six/",
    image: "",
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
                <h3 className="project-title">{project.title}</h3>
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
