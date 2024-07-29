import React from "react";
import "./Footer.scss";
import logo from '../images/LOGO-DF.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-container">
          <img src={logo} alt="Logo" className="footer__logo" />
        </div>
        <div className="footer__text">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
