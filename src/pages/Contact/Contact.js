import React from "react";
import "./Contact.css";

const Contact = () => {
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
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="contact-container">
          {/* Heading and Description */}
          <h2 id="contact-heading" className="contact-title">
            Get in Touch
          </h2>
          <p className="contact-subtitle">
            I'd love to hear from you. Whether it’s a project, question, or just
            a hello—feel free to reach out.
          </p>

          {/* New Wrapper for Form and Flower */}
          <div className="form-flower-wrapper">
            {/* Contact Form */}
            <form className="contact-form" action="#" method="post">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>

            {/* Decorative Flower */}
            <div className="flower-decorator" aria-hidden="true">
              <img
                src="/assets/images/hero-image.svg"
                alt=""
                className="flower-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
