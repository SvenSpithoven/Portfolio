import React from 'react';
import { projects } from '../../content';
import Project from './Project';
import './Project.css';

const ProjectsContainer = () => {
  if (!projects.length) return null;

  return (
    <section className="section">
      <h1 className="sectionTitle">Projects</h1>

      <div className="projectsGrid">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
