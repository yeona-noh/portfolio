import React from "react";
import "./project.css";

function Project() {
  return (
    <section name="projects" className="section-projects">
      <div className="project-container">
        <div className="img-grid">
          <div className="text-box">
            <h2 className="project-title">
              <a href="https://net-yeona-flix.netlify.app">
                Neflix(Demo) ⭢
              </a>
            </h2>
            <p className="short-description">
              A Netflix demo app built to practice UI design, routing, and API
              integration with modern web technologies.
            </p>
            <p className="tool-description">
              Built using React.js and the TMDB API, this project demonstrates
              skills in data fetching with React Query, dynamic movie filtering
              by genre, search and sort functionality, trailer playback, and
              fully responsive UI design.
            </p>
          </div>

          <figure className="img-box">
            <img src="/img/netflix.png" alt="netflix theme demonstration web application" />
          </figure>
        </div>

        <div className="img-grid">
          <figure className="img-box">
            <img
              src="/img/mindfulday.png"
              alt="mindfulday yoga web application"
            />
          </figure>
          <div className="text-box">
            <h2 className="project-title">
              <a href="https://mindfulday-2c630495ca20.herokuapp.com/">
                Mindfulday ⭢
              </a>
            </h2>

            <p className="short-description">
              Web application for Yoga and meditation videos.
            </p>
            <p className="tool-description">
              The frontend of the application is built using React.js with
              responsive design. For server-side logic, authentication, and API
              endpoints, I used Django. All user data, including videos and
              pictures, is stored in a PostgreSQL database, which is hosted on
              AWS RDS for scalability and reliability. Media files, such as
              videos and images, are uploaded and managed through AWS S3,
              ensuring efficient storage.
            </p>
          </div>
        </div>

        <div className="img-grid">
          <div className="text-box">
            <h2 className="project-title">
              <a href="https://travelogue-d8a3d5da9aa3.herokuapp.com">
                Travelogue ⭢
              </a>
            </h2>
            <p className="short-description">
              Journal about all the travel that you took and share them with
              others!
            </p>
            <p className="tool-description">
              A web application using the React.js framework for the frontend,
              providing a dynamic and responsive user interface. The backend is
              built with Node.js and Express.js, handling server-side logic, API
              requests, and database interactions. Authentication is implemented
              using JSON Web Token(JWS), ensuring secure user login,
              authorization, and session management.
            </p>
          </div>

          <figure className="img-box">
            <img src="/img/travelogue.png" alt="Travel blog web application" />
          </figure>
        </div>

        <div className="img-grid">
          <figure className="img-box">
            <img
              src="/img/weatherapp.png"
              alt="mindfulday yoga web application"
            />
          </figure>
          <div className="text-box">
            <h2 className="project-title">
              <a href="https://weatherr-app-13a6f44a1499.herokuapp.com">
                Weather To Events ⭢
              </a>
            </h2>
            <p className="short-description">
              Search for the city to look up the weather and events to go with.
            </p>
            <p className="tool-description">
              A web application built using React.js for the frontend, allowing
              users to search for real-time weather conditions and upcoming
              events in a specified city. The application intergrates with free
              APIs to fetch weather data(OpenWeatherMap) and event
              listings(Seatgeek).
            </p>
          </div>
        </div>

        <div className="img-grid">
          <div className="text-box">
            <h2 className="project-title">
              <a href="/">Best Team Realestate ⭢</a>
            </h2>
            <p className="short-description">
              Find a perfect house on the market.
            </p>
            <p className="tool-description">
              A real estate listing web application built using HTML, CSS and
              JavaScript from the frontend, providing a clean and responsive
              user interface. The backend is developed with Django, handling
              property listings, user authentication, and database management.
              The application allows users to browse, search, and filter
              properties based on criteria such as location, price, and property
              type. The admin panel enables realtors to add, update, and manage
              listings efficiently.
            </p>
          </div>

          <figure className="img-box">
            <img src="/img/realestate.png" alt="Travel blog web application" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Project;
