// src/components/Carousel.js
import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      {pictures.length > 1 && (
        <>
          <button className="carousel__button carousel__button--left" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel__button carousel__button--right" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}
      {pictures.map((picture, index) => (
        <div className={index === current ? 'carousel__slide active' : 'carousel__slide'} key={index}>
          {index === current && (
            <img src={picture} alt="Logement" className="carousel__image" />
          )}
        </div>
      ))}
      {pictures.length > 1 && (
        <p className="carousel__counter">
          {current + 1}/{length}
        </p>
      )}
    </section>
  );
};

export default Carousel;
