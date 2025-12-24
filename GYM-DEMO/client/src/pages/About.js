import React, { useEffect } from 'react';
import { FaAward, FaUsers, FaDumbbell, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const team = [
    {
      name: 'Abhishek Thakur',
      role: 'Co-Owner',
      image: '/images/team-abhishek.png',
      description: 'Fitness enthusiast and entrepreneur'
    },
    {
      name: 'Poonam Shukla',
      role: 'Owner',
      image: '/images/team-poonam.png',
      description: 'Dedicated to your fitness journey'
    },
    {
      name: 'Rabiya Khan',
      role: 'Fitness Coach',
      image: '/images/team-rabiya.png',
      description: 'Certified personal trainer'
    },
    {
      name: 'Ganesh Jadhav',
      role: 'Fitness Coach',
      image: '/images/team-ganesh.png',
      description: 'Expert strength training coach'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content" data-aos="fade-up">
            <h1>About Fitgenix</h1>
            <p>Vasai-Virar's First & Largest Luxury Gym</p>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text" data-aos="fade-right">
              <h2>Our Story</h2>
              <p>
                Fitgenix, powered by Abhishek Thakur, is Vasai-Virar's first and largest luxury gym, 
                offering a comprehensive fitness experience. Spanning over 10,000 square feet, our 
                facility is equipped with more than 44 advanced machines, an open-air CrossFit zone, 
                and wellness programs including yoga, Zumba, and steam sessions.
              </p>
              <p>
                We believe in providing a premium fitness experience that combines state-of-the-art 
                equipment with expert guidance. Our mission is to help you achieve your fitness goals 
                in a luxurious, comfortable environment.
              </p>
            </div>
            <div className="story-image" data-aos="fade-left">
              <div className="image-gallery">
                <img 
                  src="/images/main-training-area.png" 
                  alt="Fitgenix Gym"
                  className="main-image"
                  onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                  loading="lazy"
                />
                <div className="image-thumbnails">
                  <img 
                    src="/images/steam-session.png" 
                    alt="Gym Interior"
                    onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                    loading="lazy"
                  />
                  <img 
                    src="/images/training-equipment.png" 
                    alt="Training Area"
                    onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                    loading="lazy"
                  />
                  <img 
                    src="/images/crossfit-equipment.png" 
                    alt="Premium Facility"
                    onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features section">
        <div className="container">
          <div className="features-list">
            <div className="feature-item" data-aos="fade-up" data-aos-delay="0">
              <FaAward className="feature-icon" />
              <h3>Luxury Interior</h3>
              <p>Premium design with dedicated sections for strength, cardio, and CrossFit training</p>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
              <FaDumbbell className="feature-icon" />
              <h3>Advanced Equipment</h3>
              <p>44+ state-of-the-art machines for all your fitness needs</p>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
              <FaUsers className="feature-icon" />
              <h3>Expert Trainers</h3>
              <p>Certified coaches to guide you on your fitness journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Team</h2>
            <p>Meet the experts behind Fitgenix</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                    loading="lazy"
                  />
                  <div className="team-overlay">
                    <p>{member.description}</p>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-section section">
        <div className="container">
          <div className="location-content" data-aos="fade-up">
            <h2>Visit Us</h2>
            <div className="location-info">
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Address</h4>
                  <p>Basement Floor, Sitaram Building,<br />Santosh Bhuvan, Nalasopara East</p>
                </div>
              </div>
              <div className="info-item">
                <FaClock />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Daily: 5:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhone />
                <div>
                  <h4>Contact</h4>
                  <p>Visit our contact page for inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

