import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div 
        className="hero-background" 
        style={{ 
          backgroundImage: `url('/images/banner1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <div className="hero-overlay"></div>
        <div className="hero-content">
        
          <div className="container">
            <div className="hero-text" data-aos="fade-up">
              <div className="hero-text-wrapper">
                <h1 className="hero-title">
                  <span className="hero-title-line">
                    <span className="hero-title-accent">BUILD</span> YOUR BODY
                  </span>
                  <span className="hero-title-line">
                    <span className="hero-title-accent">TRANSFORM</span> WITH </span>
                 <span className="hero-title-accent">FITGENIX GYM</span>
                </h1>
                <p className="hero-subtitle">
                  WE PROVIDE OUR BEST OPPORTUNITY AND QUALIFIED TRAINERS FOR BEST WORKOUT YOURSELF AS YOU WANT!
                </p>
                <div className="hero-buttons">
                  <Link to="/membership" className="btn-primary">
                    FREE TRY-OUT TRAINING
                  </Link>
                </div>
              </div>
            
            </div>

            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Sq Ft Facility</p>
              </div>
              <div className="stat-item">
                <h3>44+</h3>
                <p>Advanced Machines</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Access Available</p>
              </div>
            </div>
          </div>

         
        </div>
      </div>

    </section>
  );
};

export default Hero;

