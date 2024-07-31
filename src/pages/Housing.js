// src/pages/Housing.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import logements from '../logements.json';
import './Housing.scss';

const Housing = () => {
  // Récupération de l'ID de l'hébergement depuis les paramètres de l'URL
  const { id } = useParams();
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();
  // État local pour stocker les informations de l'hébergement
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    // Recherche de l'hébergement correspondant à l'ID dans le fichier JSON
    const foundAccommodation = logements.find(logement => logement.id === id);
    if (foundAccommodation) {
      // Si l'hébergement est trouvé, mise à jour de l'état
      setAccommodation(foundAccommodation);
    } else {
      // Si l'ID est incorrect, redirection vers la page 404
      navigate('/404'); // Redirige vers la page 404 si l'ID est incorrect
    }
  }, [id, navigate]);

  // Si les informations de l'hébergement ne sont pas encore chargées, ne rien afficher
  if (!accommodation) {
    return null; 
  }

  return (
    <div className="housing">
      <Carousel pictures={accommodation.pictures} />
      <div className="housing__info">
        <div className="housing__details">
          <h1 className="housing__title">{accommodation.title}</h1>
          <p className="housing__location">{accommodation.location}</p>
          <div className="housing__tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="housing__tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="housing__host-rating-container">
        <div className="housing__host">
            <p>{accommodation.host.name}</p>
            <img src={accommodation.host.picture} alt={accommodation.host.name} className="housing__host-picture" />
          </div>
          <div className="housing__rating">
            {[...Array(5)].map((star, index) => (
              <span key={index} className={index < accommodation.rating ? 'star filled' : 'star'}>&#9733;</span>
            ))}
          </div>
        </div>
      </div>
      <div className="housing__dropdowns">
        <Dropdown title="Description" content={accommodation.description} />
        <Dropdown title="Équipements" content={accommodation.equipments.join(', ')} />
      </div>
    </div>
  );
};

export default Housing;
