import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Membership.css';

const Membership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    paymentMethod: 'EMI'
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = [
    {
      name: 'Basic',
      price: '₹1,999',
      period: '/month',
      features: [
        'Access to all equipment',
        'Locker facility',
        'Free parking',
        'Basic training guidance',
        'Monthly fitness assessment'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '₹2,999',
      period: '/month',
      features: [
        'Everything in Basic',
        'Group classes (Zumba, Yoga)',
        'Steam session access',
        'Nutrition consultation',
        'Priority trainer support',
        'No-cost EMI available'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '₹4,999',
      period: '/month',
      features: [
        'Everything in Premium',
        'Personal trainer sessions',
        'Open-air CrossFit access',
        'Unlimited classes',
        'Custom meal plans',
        '24/7 gym access',
        'No-cost EMI available'
      ],
      popular: false
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.post('/api/memberships', formData);
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: '',
        paymentMethod: 'EMI'
      });
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="membership-page">
      <section className="membership-hero">
        <div className="container">
          <div className="membership-hero-content" data-aos="fade-up">
            <h1>Choose Your Plan</h1>
            <p>Flexible membership options with no-cost EMI available</p>
          </div>
        </div>
      </section>

      <section className="plans-section section">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="plan-btn"
                  onClick={() => {
                    setFormData({ ...formData, plan: plan.name });
                    document.getElementById('membership-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Select Plan <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="membership-form-section section" id="membership-form">
        <div className="container">
          <div className="form-wrapper" data-aos="fade-up">
            <div className="form-header">
              <h2>Get Started Today</h2>
              <p>Fill out the form below and we'll contact you soon</p>
            </div>
            <form className="membership-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label>Select Plan *</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a plan</option>
                  {plans.map((plan, index) => (
                    <option key={index} value={plan.name}>
                      {plan.name} - {plan.price}{plan.period}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="EMI">No-Cost EMI</option>
                  <option value="Full">Full Payment</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close-modal" onClick={() => setShowModal(false)} />
            <div className="modal-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your membership inquiry has been submitted successfully. We will contact you soon.</p>
            <button className="btn-primary" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;

