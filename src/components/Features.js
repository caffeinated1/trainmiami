import React from 'react';
import './Features.css';
import { FaDumbbell, FaLaptop, FaUsers, FaHeartbeat } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaDumbbell />,
      title: "Personal Training",
      description: "One-on-one customized training sessions designed to maximize your results."
    },
    {
      icon: <FaLaptop />,
      title: "Online Coaching",
      description: "Expert guidance from anywhere with custom workout plans and nutrition advice."
    },
    {
      icon: <FaUsers />,
      title: "Group Sessions",
      description: "High-energy group workouts that combine motivation with results."
    },
    {
      icon: <FaHeartbeat />,
      title: "Nutrition Planning",
      description: "Comprehensive nutrition strategies to complement your fitness journey."
    }
  ];

  return (
    <section id="services" className="features">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 