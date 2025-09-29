import React from "react";
import "./About.css";

const About = () => {
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

      {/* About Section */}
      <section id="about" className="about" aria-labelledby="about-heading">
        <div className="about-container">
          <h2 id="about-heading" className="about-title">
            About me
          </h2>

          <div className="about-image-container">
            <img
              src="/assets/images/profile-doina.png"
              alt="A friendly portrait of Doina"
              className="about-image"
            />
          </div>

          <article className="about-text">
            <p>
              My journey began in social work, where I learned the power of
              empathy and truly understanding people’s needs. This foundation
              guides how I approach problem-solving in both life and work.
            </p>
            <p>
              After becoming a parent, I shifted to entrepreneurship, running a
              small business selling children's clothes. It wasn’t just about
              business—it was about building meaningful connections and creating
              something from the ground up.
            </p>
            <p>
              Years later, I transitioned into tech with my family’s support,
              focusing on front-end development. I now build accessible,
              responsive, and user-friendly web applications using React.js,
              JavaScript, and CSS, always ensuring accessibility is a key
              priority in my work.
            </p>
            <p>
              Along the way, I’ve built a supportive LinkedIn community that
              continues to shape my growth. I also write on{" "}
              <a
                href="https://substack.com/@doinaleovchin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>{" "}
              to document my tech journey—from mindset shifts to lessons
              learned—as a way to reflect, connect, and inspire others
              navigating similar paths. Now, I’m excited to bring my unique
              blend of empathy, creativity, and technical skills to a team where
              we can collaborate and create something meaningful together.
            </p>

            <p>
              If my journey resonates, I’d love to connect—let’s explore how we
              can work together to create impactful solutions.
            </p>
          </article>

          <div className="about-cta">
            <a href="#contact" className="about-button">
              Let’s connect
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
