import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience-list container" id="experience">
      <h2>Expérience</h2>
      <div className="job">
        <div className="job-header">
        <img src={`${process.env.PUBLIC_URL}/img/feekr.png`} alt="Feekr Logo" />
          <h3>Développeur Frontend</h3>
          <span>Nov 23 - Présent</span>
        </div>
        <p>
          Développeur Frontend chez Feekr, j'ai travaillé sur divers projets et
          stacks technologiques, alliant mes compétences en développement web
          et en design pour créer des interfaces performantes et esthétiques.
        </p>
      </div>
    </section>
  );
}

export default Experience;
