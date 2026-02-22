import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
/*import Marquee from './components/Marquee';*/
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <Navbar />
      <Hero />
      
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;