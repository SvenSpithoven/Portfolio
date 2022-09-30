import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navlist">
        <li className="navListItem">
          <a href="#projects">Projects</a>
        </li>
        <li className="navListItem">
          <a href="#about">About</a>
        </li>
        <li className="navListItem">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
