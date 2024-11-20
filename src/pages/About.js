import React from "react";
import "./about.css";

function About() {
  return (
    <div name="about" className="about-container">
      <div className="content-container">
        <div className="left-content">
          <h1 className="introducing-title">ABOUT ME</h1>
          <img
            className="profile-img"
            src="../img/whitesandNM.png"
            alt="selfportrait"
          ></img>
        </div>

        <div className="right-content">
          <p className="introducing-content">
            Hi, I'm Yeona Noh! I'm at the start of my journey, learning new
            skills every day to bring innovative ideas to life on the web. I am
            passionate about creating functional and useful
            websites. I also enjoy solving complex problems to turn something great. 
            My goal is to continue improving my skills and contribute to meaningful
            projects. When I'm not coding, you'll find me practicing yoga,
            meditating, or exploring the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
