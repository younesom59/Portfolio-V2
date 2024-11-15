import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src="/img/image.png" alt="Avatar" className="avatar" />
      <h1>Younes <span>Ouamari</span></h1>
      <p>
        Je suis développeur full-stack, spécialisé dans le développement front-end.
        J'ai suivi la formation OpenClassrooms, où j'ai acquis des compétences
        solides en création d'interfaces utilisateur modernes et responsives avec
        React, HTML5 et CSS3, tout en intégrant efficacement des API backend.
      </p>
      <div className="buttons">
        <a href="#contact" className="btn">Contactez-moi</a>
      </div>
    </section>
  );
}

export default Hero;
