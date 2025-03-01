import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();
  return (
    <section className="section-footer">
      <p className="footer">Copyright &copy; {currentYear} Yeona Noh </p>

        <a className="footer-img" href="https://github.com/yeona-noh/">
          <img className="footer-img" src="../img/github.png" alt="github-icon"/>
        </a>
      
    </section>
  );
}

export default Footer;
