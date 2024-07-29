// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import homeBanner from '../images/Image-Home.png';

const Home = () => {
  return (
    <div>
      <Banner image={homeBanner} alt="Bannière de la page d'accueil" text="Chez vous, partout et ailleurs" />
    </div>
  );
};

export default Home;
