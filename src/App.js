import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>KL Student Portal</h1>
        <p>Welcome, Divya Jyothi Kondepati</p>
      </header>

      <section className="student-info">
        <h2>About Student</h2>
        <p>
          Hello! I am a B.Tech student at KL University. I’m passionate about
          web development and enjoy building creative web applications using
          React, HTML, and CSS.
        </p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Weather App</h3>
            <p>A simple weather app built with React and OpenWeather API.</p>
          </div>
          <div className="project-card">
            <h3>Student Dashboard</h3>
            <p>
              A responsive student dashboard displaying attendance and grades.
            </p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio to showcase my academic and coding projects.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 KL University | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
