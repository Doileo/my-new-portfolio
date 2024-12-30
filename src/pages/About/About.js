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
              src="/path/to/your/profile-image.jpg"
              alt="A friendly portrait of Doina"
              className="about-image"
            />
          </div>

          <article className="about-text">
            <p>
              My journey started in social work, where I learned the invaluable
              art of truly listening and understanding people’s needs. This
              foundation of empathy has always been at the core of how I
              approach problem-solving, both in life and in my work.
            </p>
            <p>
              After becoming a parent, I took a leap into entrepreneurship,
              running a small business selling children’s clothes. It wasn’t
              just about business—it was about connection, community, and
              creating something meaningful from the ground up.
            </p>
            <p>
              Five years later, I knew it was time to invest in my future. With
              the support of my family, I transitioned into tech, focusing on
              learning and growing as a developer. Completing the Front-End
              Developer track at Skillcrush ignited my passion for accessible,
              intuitive design—design that puts the user’s needs at the
              forefront.
            </p>
            <p>
              Along the way, I’ve had the privilege of building a vibrant
              LinkedIn community, where I continue to learn from amazing
              individuals. Their insights have shaped my perspective, and I’ve
              grown in ways I never expected.
            </p>
            <p>
              Now, I’m excited to bring my unique blend of empathy, creativity,
              and technical skills to a team where I can continue to grow,
              learn, and contribute.
            </p>
            <p>
              If my journey resonates with you, let’s connect. I would love the
              opportunity to learn from you, collaborate, and explore how we can
              create something meaningful together.
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
