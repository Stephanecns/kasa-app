// Point d'entrée principal de l'application. Rendu du composant App dans le DOM et configuration du routage.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // Importer BrowserRouter pour la logique de routage

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Fonction pour mesurer les performances de l'application. Utilisée pour analyser et améliorer les performances.
reportWebVitals();
