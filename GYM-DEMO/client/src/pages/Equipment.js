import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Equipment.css';

const Equipment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const equipment = [
    {
      title: 'Butterfly Machine',
      description: 'Premium chest and shoulder isolation machine for targeted muscle development',
      imageSrc: '/images/strength-training.png',
      features: [
        'Chest isolation',
        'Shoulder development',
        'Adjustable resistance',
        'Ergonomic design'
      ]
    },
    {
      title: 'Seated Row Machine',
      description: 'Advanced back and bicep training machine with adjustable settings',
      imageSrc: '/images/training-equipment.png',
      features: [
        'Back strengthening',
        'Bicep development',
        'Posture improvement',
        'Adjustable seat'
      ]
    },
    {
      title: 'Seated Leg Curl Trainer',
      description: 'Professional leg curl machine for hamstring and calf development',
      imageSrc: '/images/crossfit-equipment.png',
      features: [
        'Hamstring focus',
        'Calf development',
        'Seated position',
        'Precision training'
      ]
    }
  ];

  return (
    <div className="equipment-page">
      <section className="equipment-hero">
        <div className="container">
          <div className="equipment-hero-content" data-aos="fade-up">
            <h1>Our Premium Equipment</h1>
            <p>Explore our state-of-the-art fitness machines</p>
          </div>
        </div>
      </section>

      <section className="equipment-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>44+ Advanced Machines</h2>
            <p>Images of our premium fitness equipment</p>
          </div>

          <div className="equipment-grid">
            {equipment.map((item, index) => (
              <div key={index} className="equipment-card" data-aos="fade-up" data-aos-delay={index * 150}>
                <img src={item.imageSrc} alt={item.title} className="equipment-image" />
                <div className="equipment-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="equipment-info" data-aos="fade-up">
            <h3>Complete Equipment Collection</h3>
            <p>
              Fitgenix features over 44 advanced machines including strength training equipment, 
              cardio machines, functional training gear, and specialized machines for targeted muscle groups. 
              All our equipment is maintained to the highest standards to ensure your safety and optimal performance.
            </p>
            <div className="equipment-stats">
              <div className="stat">
                <h4>44+</h4>
                <p>Advanced Machines</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Premium Quality</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;

