import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateparams = {
      from_name: name,
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateparams, PUBLIC_KEY).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
      },
      function (error) {
        console.log("FAILED...", error);
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      }
    );
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setNotification("");
    }, 10000);
  };

  return (
    <section name="contact" className="section-contact">
    
      <div className="form-box">
        <h2>&#9993; Here is my direct contact information:</h2>
        <p className="email-text">
          Feel free to reach me with any questions and business inquiries!
        </p>
        <p className="email-box">yeonanoh12@gmail.com</p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <label for="full-name">Full name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label for="email">Email address</label>
            <input
              type="email"
              name="user_email"
              value={email}
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="message-box">
            <label for="message">Message</label>
            <textarea
              name="message"
              value={message}
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <input className="btn" type="submit" value="Send" />
        </form>
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
