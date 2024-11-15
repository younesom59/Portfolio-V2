import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {/* Front-end Section */}
        <div className="skill-category">
          <h4>Front-end</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src="/img/reactjs.svg" alt="ReactJS Logo" />
              <p>ReactJS</p>
            </div>
            <div className="skill-item">
              <img src="/img/sass.svg" alt="Sass Logo" />
              <p>Sass</p>
            </div>
          </div>
        </div>

        {/* Back-end Section */}
        <div className="skill-category">
          <h4>Back-end</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src="/img/nodejs.svg" alt="NodeJS Logo" />
              <p>NodeJS</p>
            </div>
            <div className="skill-item">
              <img src="/img/express.svg" alt="ExpressJS Logo" />
              <p>ExpressJS</p>
            </div>
            <div className="skill-item">
              <img src="/img/mongodb.svg" alt="MongoDB Logo" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

        {/* Outils Section */}
        <div className="skill-category">
          <h4>Outils</h4>
          <div className="skills-logos">
            <div className="skill-item">
              <img src="/img/github.svg" alt="GitHub Logo" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <img src="/img/postman.svg" alt="Postman Logo" />
              <p>Postman</p>
            </div>
            <div className="skill-item">
              <img src="/img/vercel.svg" alt="Vercel Logo" />
              <p>Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
