import React from 'react';
import { header } from '../../content';
import './Header.css';
import Navbar from '../navbar/NavBar';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header">
      <h3>{homepage ? <a href={homepage}>{title}</a> : title}</h3>
      <Navbar />
    </header>
  );
};

export default Header;
