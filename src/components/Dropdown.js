import React, { useState } from 'react';
import './Dropdown.scss';

// Le composant Dropdown reçoit deux props : title et content
const Dropdown = ({ title, content }) => {
// Déclaration d'un état local isOpen, initialisé à false
const [isOpen, setIsOpen] = useState(false);


  // Fonction pour basculer l'état ouvert/fermé du dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__title" onClick={toggleDropdown}>
        {title}
        <span className={`dropdown__arrow ${isOpen ? 'dropdown__arrow--open' : ''}`}>
          &gt;
        </span>
      </button>
      {isOpen && <div className="dropdown__content">{content}</div>}
    </div>
  );
};

export default Dropdown;
