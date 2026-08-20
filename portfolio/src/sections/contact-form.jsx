import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i86dj1k", // Your service ID from EmailJS
        "template_1tegiza", // Your template ID from EmailJS
        form.current,
        "KZjt8chbf5ArbXhDO" // Your public key from EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        id="name"
        autoComplete="name"
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="user_email"
        id="email"
        autoComplete="email"
        placeholder="Your Email"
        required
      />
      <input
        type="text"
        name="user_address"
        id="address"
        autoComplete="address"
        placeholder="Your Address"
      />
      <input
        type="tel"
        name="user_number"
        id="number"
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        id="mesg"
        cols="30"
        rows="10"
        placeholder="Your Message"
        required
      ></textarea>

      <div className="btn-box formBtn">
        <button type="submit" className="btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
