import React from "react";
import { Link } from "react-scroll";
import "./home.css";
function Home() {
  return (
    <section name="home" className="section-hero">
      <p className="hero-text-box">
        I am a full stack web developer who loves traveling
        the world, exploring nature, and discovering new coffee shops. I've
        built several projects using [{" "}
        <strong className="strong-text">
          HTML, CSS, JavaScript, React, PostgreSQL, Django
        </strong>{" "}
        and <strong className="strong-text"> Python</strong> ]. I'd like to show
        you what I have made!
      </p>

      <Link className="arrow-link" to="projects" smooth={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="arrow-down"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </Link>
    </section>
  );
}

export default Home;
