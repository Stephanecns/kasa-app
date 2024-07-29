// Composant principal de l'application. Définit les routes et la structure de navigation.
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
