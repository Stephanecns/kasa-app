import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay">
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
