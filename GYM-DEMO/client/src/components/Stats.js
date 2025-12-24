import React from 'react';
import { FaDumbbell, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: <FaDumbbell />, number: '44+', label: 'Advanced Machines' },
    { icon: <FaUsers />, number: '1000+', label: 'Happy Members' },
    { icon: <FaTrophy />, number: '10,000+', label: 'Sq Ft Facility' },
    { icon: <FaHeart />, number: '24/7', label: 'Support' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

