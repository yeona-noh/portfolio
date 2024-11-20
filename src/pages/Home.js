import React from "react";
import "./home.css";
function Home() {
  return (
    <div name="home" className="home-container">
      <div className="logo-container">
        <div className="text-group">
          <h1 className="fname">YEONA</h1>
          <h1 className="lname">NOH</h1>
          <p className="greeting">
            Hello! I am a full stack web developer who loves traveling the world, animal and exploring nature,
            based in Minneapolis, Minnesota. I've built several projects using HTML, CSS, JavaScript,
            React, PostgreSQL, Django and Python. I'd like to show you what I
            have made!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
