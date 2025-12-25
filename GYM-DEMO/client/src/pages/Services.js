import React, { useEffect } from 'react';
import { FaCheck, FaDumbbell, FaRunning, FaFire, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: 'Open-Air CrossFit',
      description: 'Experience premium CrossFit training in our unique open-air zone. Train under the sky with better ventilation and increased endurance.',
      image: '/images/crossfit-equipment.png',
      features: [
        'Open-air training environment',
        'Premium CrossFit equipment',
        'Expert CrossFit coaches',
        'Better ventilation',
        'Increased endurance training'
      ],
      icon: <FaFire />
    },
    {
      title: 'Zumba Classes',
      description: 'Join our high-energy Zumba classes in our vibrant studio. First gym in Santosh Bhavan, Nalasopara to offer Zumba classes.',
      image: '/images/zumba.jpg',
      features: [
        'Dedicated studio room',
        'High-energy dance workouts',
        'Fun group sessions',
        'Certified Zumba instructors',
        'Multiple class timings'
      ],
      icon: <FaRunning />
    },
    {
      title: 'Yoga Sessions',
      description: 'Achieve mind-body balance with our relaxing yoga sessions. Perfect for flexibility, stress relief, and overall wellness.',
      image: '/images/yoga.jpg',
      features: [
        'Mind-body balance',
        'Flexibility training',
        'Stress relief',
        'Expert yoga instructors',
        'Peaceful environment'
      ],
      icon: <FaHeart />
    },
    {
      title: 'Strength Training',
      description: 'Build muscle and strength with our comprehensive strength training program using 44+ advanced machines.',
      image: '/images/stregth.jpg',
      features: [
        '44+ advanced machines',
        'Dedicated strength zone',
        'Personal training available',
        'Progressive programs',
        'Expert guidance'
      ],
      icon: <FaDumbbell />
    },
    {
      title: 'Cardio Training',
      description: 'Improve your cardiovascular health with our state-of-the-art cardio equipment and training programs.',
      image: '/images/cardio-zone.png',
      features: [
        'Advanced cardio machines',
        'HIIT programs',
        'Heart rate monitoring',
        'Customized programs',
        'Expert trainers'
      ],
      icon: <FaRunning />
    },
    {
      title: 'Steam Sessions',
      description: 'Rejuvenate and recover with our relaxing steam sessions. Perfect for post-workout recovery and detox.',
      image: '/images/steam.jpg',
      features: [
        'Post-workout recovery',
        'Detoxification',
        'Relaxation',
        'Muscle recovery',
        'Wellness benefits'
      ],
      icon: <FaHeart />
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content" data-aos="fade-up">
            <h1>Our Premium Services</h1>
            <p>Comprehensive fitness programs designed for everyone</p>
          </div>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-detail ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="service-detail-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => { e.target.src = '/images/hero-background.png'; }}
                  loading="lazy"
                />
              </div>
              <div className="service-detail-content">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="facilities-section section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Additional Facilities</h2>
            <p>Everything you need for a complete fitness experience</p>
          </div>
          <div className="facilities-grid">
            <div className="facility-item" data-aos="fade-up" data-aos-delay="0">
              <h3>Free Parking</h3>
              <p>Convenient parking available for all members</p>
            </div>
            <div className="facility-item" data-aos="fade-up" data-aos-delay="100">
              <h3>Cafeteria</h3>
              <p>Healthy snacks and refreshments available</p>
            </div>
            <div className="facility-item" data-aos="fade-up" data-aos-delay="200">
              <h3>Locker Rooms</h3>
              <p>Secure locker facilities for your belongings</p>
            </div>
            <div className="facility-item" data-aos="fade-up" data-aos-delay="300">
              <h3>Flexible Payment</h3>
              <p>No-cost EMI plans available for memberships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

