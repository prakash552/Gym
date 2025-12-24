import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ title, description, image, features, delay = 0 }) => {
  return (
    <div 
      className="service-card" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="service-image">
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            e.target.src = '/images/hero-background.png';
          }}
          loading="lazy"
        />
        <div className="service-overlay"></div>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <FaCheck /> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;

