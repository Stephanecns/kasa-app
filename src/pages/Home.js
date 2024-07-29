// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import homeBanner from '../images/Image-Home.png';

const Home = () => {
  return (
    <div>
      <Banner image={homeBanner} alt="Bannière de la page d'accueil" />
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site web !</p>
    </div>
  );
};

export default Home; // Exportation par défaut
