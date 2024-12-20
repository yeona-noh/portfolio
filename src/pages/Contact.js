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
  const [notification, setNotification] = useState({message:"", type:""});

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
        setNotification({ message: "Message sent successfully!", type: "success"})
      },
      function (error) {
        console.log("FAILED...", error);
        setNotification({message:"Failed to send message. Please try again.", type:"error"})
      }
    );
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setNotification("")
    }, 10000)
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
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
