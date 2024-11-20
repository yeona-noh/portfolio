import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();
  return (
    <div className="footer-container">
      <img className="footer-img" src="../img/copyright.png" alt="copyright" />
      <p className="footer">{currentYear} Yeona Noh </p>
      <div className="github-linkedin-icon">
        <a className="footer-img" href="https://github.com/yeona-noh/">
          <img className="footer-img" src="../img/github.png" alt="github-icon"/>
        </a>
        <a className="footer-img" href="/">
          <img className="footer-img" src="../img/linkedin.png" alt="linkedin-icon"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
