import React from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { useAnimation } from "../../context/AnimationContext";
import "./Contact.css";

const Contact = () => {
  const { animationsEnabled } = useAnimation(); // Access animation state

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_k2mq36i",
        "template_84kmkxg",
        e.target,
        "NdkmeFqEx8sZ8nMY5"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Thank you! Your message has been sent successfully.");
        },
        (error) => {
          console.log("Error sending message:", error.text);
          alert(
            "Sorry, there was an error sending your message. Please try again."
          );
        }
      );

    e.target.reset(); // Reset the form after submission
  };

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
            Contact
          </h2>
          <p className="contact-subtitle">
            Excited to bring creativity and accessibility to your team? Let’s
            connect and explore the possibilities.
          </p>

          {/* Direct Email Link for HRs */}
          <p className="direct-email">
            Prefer email? You can reach me directly at{" "}
            <a
              href="mailto:doina.leovchin.dev@gmail.com"
              className="email-link"
            >
              doina.leovchin.dev@gmail.com
            </a>
          </p>

          {/* New Wrapper for Form and Flower */}
          <div className="form-flower-wrapper">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={sendEmail}>
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
                className={`flower-image ${
                  animationsEnabled ? "" : "no-animation"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
