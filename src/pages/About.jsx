import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-wrapper">
      <h1 className="h1-title">Webbutveckling med CMS Uppgift</h1>

      <div className="team-stack-container">
        <div className="team-container">
          <h2 className="h2-title">Headless CMS with WordPress.com & React</h2>
          <p className="team-items">By Panos Tsapanidis</p>
          <a
            href="https://github.com/panosjapan7/headless-cms-wordpress"
            target={"_blank"}
            className="link"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="stack-container">
          <h2 className="h2-title">Stack</h2>
          <p className="stack-items">Wordpress</p>
          <p className="stack-items">React</p>
          <p className="stack-items">GitHub</p>
          <p className="stack-items">html-react-parser</p>
          <p className="stack-items">Vercel</p>
        </div>
      </div>
    </div>
  );
}

export default About;
