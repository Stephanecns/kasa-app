// src/components/Banner.js
import React from 'react';
import './Banner.scss';

const Banner = ({ image, alt }) => {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner__image" />
    </div>
  );
};

export default Banner;
