import React from 'react';
import './Features.css';
import { FaDumbbell, FaLaptop, FaUsers, FaHeartbeat, FaWalking } from 'react-icons/fa';


const Features = () => {
  const features = [
    {
      icon: <FaDumbbell />,
      title: "Personal Training",
      description: "One-on-one customized training sessions designed to maximize your results.",
      pricing: "Starting at $120/hour - Packages available 20 or more sessions at $80/hour"
    },
    {
      icon: <FaLaptop />,
      title: "Online Coaching",
      description: "Expert guidance from anywhere with custom workout plans and nutrition advice.",
      pricing: "Starting at $270/month - 3 months upfront"
    },
    {
      icon: <FaUsers />,
      title: "Group Sessions",
      description: "High-energy 3 person group workouts that combine motivation/diet coaching/training template with results.",
      pricing: "Starting at $30/session or $300/month for 12 sessions per person. Party must enroll together."
    },
    {
      icon: <FaHeartbeat />,
      title: "Nutrition Planning",
      description: "Comprehensive nutrition strategies to complement your fitness journey.",
      pricing: "Price determined by the complexity of the plan"
    }
  ];

  return (
    <section id="services" className="features">
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <h3 className="free-session-text">Try our free 20 min session in order to experience the best hands on training in Miami</h3>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <p className="pricing">{feature.pricing}</p>
            </div>
          ))}
        </div>
       
        <div className="senior-training-section">
          <div className="senior-icon"><FaWalking /></div>
          <h3>Senior Training Program</h3>
          <p>We offer specialized training programs for seniors and their loved ones. Our senior-focused approach emphasizes mobility, strength, and quality of life improvements.</p>
          <p>If you or a loved one is interested in senior-specific training, please visit:</p>
          <a href="https://trainsenior.com" target="_blank" rel="noopener noreferrer" className="senior-link">
            TrainSenior.com
          </a>
        </div>
        <div className="pricing-note">
          <p>Payment plans are available. Contact us for details.</p> <br />
          <p>*All packages are non-refundable. Be advised that you are responsible for the full amount of the package even if you do not use all the sessions.</p> <br />
        </div>
      </div>
    </section>
  );
};

export default Features; 