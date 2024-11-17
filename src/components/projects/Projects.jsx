import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Booki',
    description: 'Site internet permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.',
    technologies: 'HTML, CSS',
    challenges: 'Le respect des règles responsives imposées par les designers.',
    github: 'https://github.com/younesom59/Booki-Project-Finished',
  },
  {
    id: 2,
    title: 'Sophie Bluel',
    description: 'Dynamiser le site internet de Sophie Bluel, architecte d\'intérieur, grâce au JavaScript.',
    technologies: 'JavaScript',
    challenges: 'La découverte de cette nouvelle stack.',
    github: 'https://github.com/younesom59/Portfolio-architecte-sophie-bluel.git',
  },
  {
    id: 3,
    title: 'Qwenta',
    description: 'Assurer la bonne livraison du projet Qwenta grâce à une gestion de projet et d\'équipe mise en place.',
    technologies: 'Gestion de projet',
    challenges: 'Gestion des plannings avec une deadline serrée.',
    github: 'https://github.com/younesom59/',
  },
  {
    id: 4,
    title: 'Nina Carducci',
    description: 'Débugger et améliorer les performances du site de Nina Carducci.',
    technologies: 'Audit, SEO',
    challenges: 'Reprise d\'un travail réalisé par un autre développeur.',
    github: 'https://github.com/younesom59/Debug---Site-Photographe.git',
  },
  {
    id: 5,
    title: 'Kasa',
    description: 'Refonte du site de Kasa avec React en développant l\'ensemble de l\'application.',
    technologies: 'React, NodeJS',
    challenges: 'Respecter les deadlines.',
    github: 'https://github.com/younesom59/kasa.git',
  },
  {
    id: 6,
    title: 'Mon Vieux Grimoire',
    description: 'Développement d\'une application complète pour la gestion de livres.',
    technologies: 'Angular, TypeScript',
    challenges: 'Gestion des états complexes et interactions utilisateur.',
    github: 'https://github.com/younesom59/MonVieuxGrimoire.git',
  },
];

function Projects() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="projects container" id="projects">
      <h2>Projets</h2>
      <div className="project-gallery">
        {projectsData.map((project) => (
          <div className="project" key={project.id} onClick={() => openModal(project)}>
            <img src={`${process.env.PUBLIC_URL}/img/project${project.id}.png`} alt={`Projet ${project.id}`} />
            <div className="project-info">
              <button className="project-link">
                {project.title}
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
            <p><strong>Challenges :</strong> {modalProject.challenges}</p>
            <p>
              <strong>GitHub :</strong>{' '}
              <a
                href={modalProject.github}
                target="_blank"
                rel="noopener noreferrer" class="lien"
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
