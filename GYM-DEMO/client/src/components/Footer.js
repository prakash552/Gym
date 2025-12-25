import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="images/logo.png" className="img-fluid" alt="" />
            <p className="footer-subtitle">Powered by Abhishek Thakur</p>
            <p className="footer-description">
              Vasai-Virar's First & Largest Luxury Gym. Transform your body, transform your life.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/equipment">Equipment</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>CrossFit Training</li>
              <li>Zumba Classes</li>
              <li>Yoga Sessions</li>
              <li>Strength Training</li>
              <li>Steam Sessions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>Basement Floor, Sitaram Building,<br />Santosh Bhuvan, Nalasopara East</span>
              </li>
              <li>
                <FaPhone />
                <span>Visit website for contact</span>
              </li>
              <li>
                <FaEnvelope />
                <span>support@fitgenixgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fitgenix. All rights reserved. Powered by Abhishek Thakur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

