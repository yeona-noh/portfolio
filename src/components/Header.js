import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import "./header.css";
function Header() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const headerEl = document.querySelector(".header");
    if (navOpen) {
      headerEl.classList.add("nav-open");
    } else {
      headerEl.classList.remove("nav-open");
    }
  }, [navOpen]);

  return (
    <header className="header">
      <div className="header-menu">
        <h1 className="name">
          <Link to="home" smooth={true}>
            Yeona Noh
          </Link>
        </h1>

        {/* 메뉴 */}
        <nav className={`main-nav ${navOpen ? "nav-open" : ""}`}>
          <ul className="main-nav-list">
            <li className="menu">
              <Link
                to="projects"
                smooth={true}
                onClick={() => setNavOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="menu">
              <Link to="about" smooth={true} onClick={() => setNavOpen(false)}>
                About
              </Link>
            </li>
            <li className="menu">
              <Link
                to="contact"
                smooth={true}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mobile-nav-icon"
              name="close-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mobile-nav-icon"
              name="open-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
