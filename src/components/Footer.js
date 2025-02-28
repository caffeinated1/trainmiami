import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>TRAINMIAMI.COM</h2>
            <p>Transform your body. Transform your life.</p>
            <h2>TRAINSENIOR.COM</h2>
            <p>Made for Grandma and Grandpa.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Personal Training</a></li>
                <li><a href="#services">Online Coaching</a></li>
                <li><a href="#services">Group Sessions</a></li>
                <li><a href="#services">Nutrition Planning</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Miami, FL</p>
              <p>(786) 804-0689</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TrainMiami. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 