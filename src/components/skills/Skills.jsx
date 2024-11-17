import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Front-end',
    skills: [
      { name: 'ReactJS', img: `${process.env.PUBLIC_URL}/img/reactjs.svg` },
      { name: 'Sass', img: `${process.env.PUBLIC_URL}/img/sass.svg` },
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { name: 'NodeJS', img: `${process.env.PUBLIC_URL}/img/nodejs.svg` },
      { name: 'ExpressJS', img: `${process.env.PUBLIC_URL}/img/express.svg` },
      { name: 'MongoDB', img: `${process.env.PUBLIC_URL}/img/mongodb.svg` },
    ],
  },
  {
    category: 'Outils',
    skills: [
      { name: 'GitHub', img: `${process.env.PUBLIC_URL}/img/github.svg` },
      { name: 'Postman', img: `${process.env.PUBLIC_URL}/img/postman.svg` },
      { name: 'Vercel', img: `${process.env.PUBLIC_URL}/img/vercel.svg` },
    ],
  },
];

function Skills() {
  return (
    <section className="skills container">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h4>{category.category}</h4>
            <div className="skills-logos">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <img src={skill.img} alt={`${skill.name} Logo`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
