import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src="/img/logo.svg" alt="Logo" className="logo" />
      </div>
      <nav>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Expérience</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
