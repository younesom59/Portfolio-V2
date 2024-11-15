import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience-list" id="experience">
      <h2>Expérience</h2>

      <div className="job">
        <div className="job-header">
          <img src="/img/feekr.png" alt="Google Logo" />
          <h3>Développeur Frontend</h3>
          <span>Nov 23 - Présent</span>
        </div>
        <p>Développeur Frontend chez Feekr, j'ai travaillé sur divers projets et stacks technologiques, alliant mes compétences en développement web et en design pour créer des interfaces performantes et esthétiques. </p>
      </div>

      {/* Ajoutez les autres expériences de la même manière */}
    </section>
  );
}

export default Experience;
