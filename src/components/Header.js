// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO-DH.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/" className="header__nav-link">Accueil</Link></li>
          <li className="header__nav-item"><Link to="/about" className="header__nav-link">A Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
