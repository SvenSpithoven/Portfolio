import React from 'react';
import { ProjectsType } from '../../content';
import './Project.css';
import LaunchIcon from '@mui/icons-material/Launch';

const Project: React.FC<ProjectsType> = ({ project }) => {
  return (
    <div className="projectCard">
      <h2>{project.name}</h2>
      <p className="projectDescription">{project.description}</p>

      {project.stack && (
        <ul className="projectStackContainer">
          {project.stack.map((item) => (
            <li key={project.stack.indexOf(item)} className="projectStackItem">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.website && (
        <a href={project.website} aria-label="website" className="projectStackLink">
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};

export default Project;
