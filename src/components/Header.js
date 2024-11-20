import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeNav = () => {
    setNav(false);
  };
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className="header-container">

      <div className="header-menu">
        {/* 이게 햄버거 메뉴 아이콘 */}
        <img
          className="menu-bar"
          src="../img/hamburger-menu.png"
          alt="hamburger-menu"
          onClick={handleNav}
        ></img>
        <ul className={`extended-header-size ${nav ? "open" : "close"}`}>
          <li className="menu">
            <Link to="home" smooth={true} onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="menu">
            <Link to="about" smooth={true} onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="menu">
            <Link to="projects" smooth={true} onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li className="menu">
            <Link to="contact" smooth={true} onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
