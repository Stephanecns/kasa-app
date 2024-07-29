// Composant principal de l'application. Définit les routes et la structure de navigation.
import React from 'react';
import Header from './components/Header';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
    <Header />
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
