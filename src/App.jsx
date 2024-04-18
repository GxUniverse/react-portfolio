import React from 'react';
import Header from './components/Header';
import Maine from './components/Maine';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div style={{ backgroundColor: '#e0e7ff' }}>
      <Header />
      <Maine />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
