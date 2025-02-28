import React, { useState, useEffect } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    
    if (isMobile) {
      // On mobile, initiate a phone call
      window.location.href = `tel:7868040689`;
    } else {
      // On desktop, send an email
      const subject = `Consultation Request from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A`;
      window.location.href = `mailto:trainseniorsonline@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="join" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>READY TO GET STARTED?</h2>
          <p>Take the first step toward your fitness goals today.</p>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <select name="service">
              <option value="" disabled selected>Select Service</option>
              <option value="personal">Personal Training</option>
              <option value="online">Online Coaching</option>
              <option value="group">Group Sessions</option>
              <option value="nutrition">Nutrition Planning</option>
            </select>
            <button type="submit" className="btn btn-primary">
              {isMobile ? "Call For Free Consultation" : "Get Your Free Consultation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 