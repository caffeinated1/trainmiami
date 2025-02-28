import React from 'react';
import './Hero.css';
import gymLogo from '../assets/gym-logo.PNG';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>TRANSFORM YOUR BODY</h1>
        <h2>PREMIER PERSONAL TRAINING IN MIAMI AND PINECREST</h2>
        <p>Expert coaching tailored to your goals - in-person and online</p>
        <div className="hero-buttons">
          <a href="#join" className="btn btn-primary">Start Your Journey</a>
          <a href="#services" className="btn btn-secondary">Explore Programs</a>
        </div>
        <div className="gym-location">
          <h3 className="facility-text">TRAINING FACILITY</h3>
          <a href="https://g.co/kgs/tegBghB" target="_blank" rel="noopener noreferrer">
            <img 
              src={gymLogo}
              alt="Training Facility" 
              className="gym-logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 