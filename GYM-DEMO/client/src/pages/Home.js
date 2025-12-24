import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaFire, FaUsers, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ServiceCard from '../components/ServiceCard';
import Stats from '../components/Stats';
import Testimonial from '../components/Testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FaDumbbell />,
      title: '44+ Advanced Machines',
      description: 'State-of-the-art equipment for all your fitness needs'
    },
    {
      icon: <FaRunning />,
      title: '10,000+ Sq Ft Facility',
      description: 'Spacious workout area with dedicated training zones'
    },
    {
      icon: <FaFire />,
      title: 'Open-Air CrossFit',
      description: 'Unique premium CrossFit zone under the sky'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Trainers',
      description: 'Certified coaches to guide you on your fitness journey'
    }
  ];

  const services = [
    {
      title: 'CrossFit Training',
      description: 'Premium open-air CrossFit zone with better ventilation',
      image: '/images/crossfit-training.png',
      features: ['Open-air training', 'Advanced equipment', 'Expert coaches']
    },
    {
      title: 'Zumba Classes',
      description: 'High-energy dance workouts in our vibrant studio',
      image: '/images/zumba-class.png',
      features: ['Studio room', 'Fun workouts', 'Group sessions']
    },
    {
      title: 'Yoga Sessions',
      description: 'Relaxing yoga classes for mind and body wellness',
      image: '/images/yoga-class.png',
      features: ['Mind-body balance', 'Flexibility', 'Stress relief']
    },
    {
      title: 'Steam Sessions',
      description: 'Rejuvenating steam sessions for recovery',
      image: '/images/steam-room.png',
      features: ['Recovery', 'Relaxation', 'Detox']
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
   
      <Hero />
      <section className="features-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Why Choose Fitgenix</h2>
            <p>Vasai-Virar's First & Largest Luxury Gym</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="services-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Premium Services</h2>
            <p>Comprehensive fitness programs for everyone</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                delay={index * 150} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Premium Facility</h2>
            <p>Take a look at our state-of-the-art gym</p>
          </div>
          <div className="gallery-grid" data-aos="fade-up">
            <div className="gallery-item large">
              <img 
                src="/images/main-training-area.png" 
                alt="Fitgenix Gym Main Area"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Main Training Area</h3>
                <p>10,000+ sq ft of premium space</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/crossfit-equipment.png" 
                alt="Advanced Equipment"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Advanced Equipment</h3>
                <p>44+ state-of-the-art machines</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/zumba-studio.png" 
                alt="Training Zone"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Training Zone</h3>
                <p>Dedicated workout spaces</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/yoga-session.png" 
                alt="Fitness Area"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Fitness Area</h3>
                <p>Premium workout environment</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/strength-training.png" 
                alt="Workout Space"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Workout Space</h3>
                <p>Spacious and modern</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/cardio-zone.png" 
                alt="Premium Facility"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Premium Facility</h3>
                <p>Luxury fitness experience</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/steam-session.png" 
                alt="Gym Interior"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Gym Interior</h3>
                <p>Beautifully designed space</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/training-equipment.png" 
                alt="Training Equipment"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Training Equipment</h3>
                <p>Professional grade machines</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="/images/additional-facility.png" 
                alt="Additional Facility"
                onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>Additional Facility</h3>
                <p>Complete fitness solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-preview section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Explore Our Equipment in 3D</h2>
            <p>Interactive 3D models of our premium fitness machines</p>
          </div>
          <div className="equipment-preview-content" data-aos="fade-up">
            <p>Experience our state-of-the-art equipment in 3D. Rotate, zoom, and explore our premium machines.</p>
            <Link to="/equipment" className="btn-primary">
              View All Equipment <FaArrowRight style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Transform Your Life?</h2>
            <p>Join Fitgenix today and start your fitness journey with Vasai-Virar's premier luxury gym</p>
            <Link to="/membership" className="btn-primary">
              Get Started <FaArrowRight style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonial />
      
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;

