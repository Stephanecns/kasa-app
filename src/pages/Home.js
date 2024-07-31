import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../images/Image-Home.png';
import logements from '../logements.json';
import './Home.scss';

const Home = () => {

  // État local pour stocker les informations des hébergements
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Mise à jour de l'état avec les données des logements
    setAccommodations(logements);
  }, []);

  return (
    <div>
      <Banner image={homeBanner} alt="Bannière de la page d'accueil" text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {accommodations.map((accommodation) => (
          <Card key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
