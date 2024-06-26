import React from 'react';
import Header from './components/Header';
import Maine from './components/maine';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume'

function App() {
  return (
    <div style={{ backgroundColor: '#e0e7ff' }}>
      <Header />
      <Maine />
      <Portfolio />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
