import React from "react";
import "./project.css";
import FlipCard from "../components/FlipCard";
const PROJECTS = [
  {
    src: "/img/mindfulday.png",
    title: "Mindfulday",
    description: "Online yoga and meditation classes",
    language:"Used React for frontend framwork, django for backend, and database for postgrSQL.",
    link: "/",
    icon: ["/img/react.png", "/img/django.png"],
  },
  {
    src: "/img/travelogue.png",
    title: "Travelogue",
    description:
      "Journal about all the travel that you took and share them with others!",
    language: "React framework for frontend and build backend with node and JWT token for authentication.",
    link: "https://travelogue-d8a3d5da9aa3.herokuapp.com",
    icon: ["/img/node.png", "/img/postgresql.png","/img/react.png"],
  },
  {
    src: "/img/realestate.png",
    title: "Realestate",
    description: "Find a perfect houses on the market",
    language: "used Django for framework.",
    link: "/",
    icon: ["/img/django.png", "/img/postgresql.png"],
  },
  {
    src: "/img/weatherapp.png",
    title: "Weather/Event",
    description:
      "Search for the city to look up the weather and the event to go with",
    language: "React and api to bring data for weather and events",
    link: "https://weatherr-app-13a6f44a1499.herokuapp.com",
    icon: ["/img/react.png", "/img/api.png"],
  },
  
];

function Project() {
  return (
    <div className="projects">
      <h1 className="project-page-title">PROJECTS</h1>
      <div className="project-container">
        <FlipCard PROJECTS={PROJECTS}/>
      </div>
    </div>
  );
}

export default Project;
