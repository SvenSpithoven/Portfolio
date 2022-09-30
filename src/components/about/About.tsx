import React from 'react';
import { about } from '../../content';
import './About.css';
import me from './../../assets/images/me.jpeg';

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about">
      <img src={me} className="me"></img>
      {name && (
        <h1>
          Hello, I am <span className="aboutName">{name}.</span>
        </h1>
      )}
      {role && <h2 className="aboutRole">A {role}.</h2>}
      <p className="aboutDesciption">{description && description}</p>
    </div>
  );
};

export default About;
