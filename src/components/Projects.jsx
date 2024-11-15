import React, { useState } from 'react';
import '../styles/Projects.css';

const projectsData = {
  1: {
    title: 'Booki',
    description: 'Site internet permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.',
    technologies: 'HTML, CSS',
    problematiques: 'Apprentissage du design responsive pour assurer une compatibilité optimale sur tous les types d\'appareils.',
    github: 'https://github.com/younesom59/Booki-Project-Finished'
  },
  2: {
    title: 'Sophie Bluel',
    description: 'Dynamisation du site internet de Sophie Bluel, architecte d\'intérieur, grâce au JavaScript.',
    technologies: 'JavaScript',
    problematiques: 'Gestion efficace des modales pour améliorer l\'expérience utilisateur.',
    github: 'https://github.com/younesom59/Portfolio-architecte-sophie-bluel.git'
  },
  3: {
    title: 'Qwenta',
    description: 'Assurer la bonne livraison du projet Qwenta grâce à une gestion de projet et d\'équipe mise en place.',
    technologies: 'Gestion de projet',
    problematiques: 'Sélection des technologies adaptées, résolue par une veille technologique approfondie.',
    github: 'https://github.com/younesom59/'
  },
  4: {
    title: 'Nina Carducci',
    description: 'Débogage et amélioration des performances du site de Nina Carducci.',
    technologies: 'Audit, SEO',
    problematiques: 'Revoir et prioriser les avertissements critiques pour les résoudre efficacement.',
    github: 'https://github.com/younesom59/Debug---Site-Photographe.git'
  },
  5: {
    title: 'Kasa',
    description: 'Refonte du site de Kasa avec React en développant l\'ensemble de l\'application.',
    technologies: 'React, NodeJS',
    problematiques: 'Prise en main d\'une nouvelle bibliothèque pour développer l\'application.',
    github: 'https://github.com/younesom59/kasa.git'
  },
  6: {
    title: 'Mon Vieux Grimoire',
    description: 'Développement d\'une application complète pour la gestion de livres.',
    technologies: 'Angular, TypeScript',
    problematiques: 'Initiation au développement backend pour gérer les données de l\'application.',
    github: 'https://github.com/younesom59/MonVieuxGrimoire.git'
  },
};

function Projects() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (projectId) => {
    setModalProject(projectsData[projectId]);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <div className="project-gallery">
        {Object.keys(projectsData).map((key) => (
          <div className="project" key={key} onClick={() => openModal(key)}>
            <img src={`/img/project${key}.png`} alt={`Projet ${key}`} />
            <div className="project-info">
              <button className="project-link">
                {projectsData[key].title}
              </button>
              <p>Cliquez pour découvrir</p>
            </div>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalProject.title}</h2>
            <p><strong>Description :</strong> {modalProject.description}</p>
            {modalProject.technologies && (
              <p><strong>Technologies :</strong> {modalProject.technologies}</p>
            )}
            <p><strong>Problématiques rencontrées :</strong> {modalProject.problematiques}</p>
            <p>
              <strong>GitHub :</strong>{' '}
              <a
                href={modalProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
