import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      setScrolled(scrollY > 50);
      setAtBottom(scrollY + windowHeight >= documentHeight - 100); // 100px threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {(!scrolled || atBottom) && (
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              <div className="top-bar-left">
                <FaPhone className="phone-icon" />
                <span>+91 916-875-223-5968</span>
              </div>
              <div className="top-bar-right">
                <FaSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>
      )}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
             <img
              src="images/logo.png"
              className="img-fluid"
              alt=""
             />
             
            </Link>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                HOMEPAGE
              </Link>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                to="/membership" 
                className={location.pathname === '/membership' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link 
                to="/equipment" 
                className={location.pathname === '/equipment' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                EQUIPMENT
              </Link>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>

            {scrolled && !atBottom && (
              <FaSearch className="nav-search-icon" />
            )}

            <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
