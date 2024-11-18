import React from 'react';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
