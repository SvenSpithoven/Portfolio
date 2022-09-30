import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/Contact';
import Header from './components/header/Header';
import ProjectsContainer from './components/projects/ProjectsContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <ProjectsContainer />
      <Contact />
    </div>
  );
}

export default App;
