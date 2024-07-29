import React from 'react';
import Banner from '../components/Banner';
import aboutBanner from '../images/Image-About.png';

const About = () => {
  return (
    <div>
      <Banner image={aboutBanner} alt="Bannière de la page d'accueil" />
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site web !</p>
    </div>
  );
};

export default About;

