import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
      await axios.post('/api/contact', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content" data-aos="fade-up">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Contact us today!</p>
          </div>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info" data-aos="fade-right">
              <h2>Contact Information</h2>
              <p>Visit us at our premium location or reach out through any of these channels.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>Basement Floor, Sitaram Building,<br />Santosh Bhuvan, Nalasopara East</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <h3>Operating Hours</h3>
                    <p>Daily: 5:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>support@fitgenixgym.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 77XXXXXX37 / +91 72XXXXXX87</p>
                    <p style={{ fontSize: '14px', marginTop: '5px', opacity: 0.8 }}>Contact us for exact numbers</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" data-aos="fade-left">
              <h2>Send Us a Message</h2>
              {showSuccess && (
                <div className="success-message">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
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
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-wrapper" data-aos="fade-up">
            <h2>Find Us on Map</h2>
            <div className="map-placeholder">
              <p>📍 Basement Floor, Sitaram Building, Santosh Bhuvan, Nalasopara East</p>
              <p>Visit us at our location or check Google Maps for directions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

