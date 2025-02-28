import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>TRANSFORM YOUR BODY</h1>
        <h2>MIAMI'S PREMIER PERSONAL TRAINING</h2>
        <p>Expert coaching tailored to your goals - in-person and online</p>
        <div className="hero-buttons">
          <a href="#join" className="btn btn-primary">Start Your Journey</a>
          <a href="#services" className="btn btn-secondary">Explore Programs</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 