import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6p9ovxv",
        "template_ugerh16",
        form.current,
        "5pQHkRYUb7qVC8i-K"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");

          // Clear form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">

      {/* Name */}
      <div className="input-box">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>

      {/* Email */}
      <div className="input-box">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>

      {/* Subject */}
      <div className="input-box">
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
        />
      </div>

      {/* Message */}
      <div className="input-box">
        <textarea
          name="message"
          placeholder="Your Message"
          rows="7"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="btn-box formBtn">
        <button type="submit" className="btn">
          Send Message
        </button>
      </div>

    </form>
  );
};

export default ContactForm;