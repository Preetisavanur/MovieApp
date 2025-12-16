import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About This App</h1>

        <p>
          This is a movie browsing application built using React. It allows users
          to explore popular, trending, and upcoming movies with an intuitive
          interface.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Browse popular and trending movies</li>
          <li>Search movies in real time</li>
          <li>View movie details and trailers</li>
          <li>Responsive and user-friendly UI</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
          <li>React JS</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>CSS</li>
        </ul>

        <h2>API Used</h2>
        <p>
          Movie data is fetched from <strong>The Movie Database (TMDB)</strong>
          API.
        </p>

        <h2>Future Enhancements</h2>
        <ul>
          <li>User authentication</li>
          <li>Watchlist functionality</li>
          <li>Personalized recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
