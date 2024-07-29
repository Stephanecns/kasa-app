import React from 'react';
import './Banner.scss';

const Banner = ({ image, alt, text }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner__image" />
      {text && (
        <div className="banner__overlay">
          <h1 className="banner__text">{text}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
