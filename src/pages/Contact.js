import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";


const Contact = () => {
  const SERVICE_ID = process.env.SERVICE_ID;
  const TEMPLATE_ID = process.env.TEMPLATE_ID;
  const PUBLIC_KEY = process.env.PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="left-contact-container">
          <h1 className="contact-title">
            <img className="contact-icon" src="../img/contactme.png" alt="contct-folder"></img>CONTACT
          </h1>
          <p className="email-box">Direct email: yeonanoh12@gmail.com</p>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
