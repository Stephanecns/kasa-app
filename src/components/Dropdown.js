import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

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
