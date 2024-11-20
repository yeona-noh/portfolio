import React from "react";
import "./flipcard.css";
function FlipCard(props) {
  const { PROJECTS } = props;
  return (
    <div className="flip-card-wrapper">
      {PROJECTS.map((project, index) => (
        <div key={index} class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                className="project-img"
                src={project.src}
                alt="project-thumbnail"
              />
              <h1 className="project-title">{project.title}</h1>
              <p className="project-decription">{project.description}</p>
            </div>
            <div class="flip-card-back">
              <p className="project-language">{project.language}</p>
              <div className="link">
                <div className="icon-box">
                  {project.icon.map((iconSrc, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={iconSrc}
                      className="icon"
                      alt="icon"
                    />
                  ))}
                </div>
                <a href={project.link}>
                  <img className="link-img" src="../img/link-icon.png" alt="link-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlipCard;
