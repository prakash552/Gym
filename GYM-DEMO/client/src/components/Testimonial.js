import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Member since 2023',
      text: 'Fitgenix is the best gym in Vasai-Virar! The open-air CrossFit zone is amazing and the trainers are very professional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Zumba Enthusiast',
      text: 'I love the Zumba classes here! The studio is perfect and the energy is incredible. Best fitness decision I made!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Fitness Enthusiast',
      text: 'The facility is huge and well-equipped. The 44+ machines cover everything I need for my workout routine.',
      rating: 5
    }
  ];

  return (
    <section className="testimonial-section section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>What Our Members Say</h2>
          <p>Real experiences from our Fitgenix family</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

