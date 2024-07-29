import React from "react";
import Banner from "../components/Banner";
import Dropdown from '../components/Dropdown';
import aboutBanner from "../images/Image-About.png";

const About = () => {
  return (
    <div>
      <Banner image={aboutBanner} alt="Bannière de la page d'accueil" />
      <Dropdown
        title="Fiabilité"
        content="La fiabilité est au cœur de notre engagement."
      />
      <Dropdown
        title="Respect"
        content="Le respect est une valeur fondamentale chez nous."
      />
      <Dropdown
        title="Service"
        content="Nous nous engageons à fournir un service de qualité."
      />
      <Dropdown
        title="Sécurité"
        content="La sécurité de nos utilisateurs est notre priorité."
      />
    </div>
  );
};

export default About;
