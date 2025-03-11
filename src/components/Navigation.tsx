"use client";

import Link from 'next/link';
import Logo from './Logo';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu (used when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header Bar */}
      <div className="header-bar"></div>

      {/* Navigation */}
      <div className="nav-container">
        <div className="container">
          <Logo />
          
          {/* Hamburger Menu Button (mobile only) */}
          {isMobile && (
            <button 
              className="hamburger-button" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          )}
          
          {/* Navigation Menu */}
          <nav className={`nav ${isMobile ? 'mobile' : ''} ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {/* Home link (mobile only) */}
              {isMobile && (
                <li className="nav-item">
                  <Link href="/" className="nav-link" onClick={closeMenu}>home</Link>
                </li>
              )}
              <li className="nav-item">
                <Link href="/about" className="nav-link" onClick={closeMenu}>about us</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link" onClick={closeMenu}>services</Link>
              </li>
              <li className="nav-item">
                <Link href="/home-staging" className="nav-link" onClick={closeMenu}>home staging</Link>
              </li>
              <li className="nav-item">
                <Link href="/testimonials" className="nav-link" onClick={closeMenu}>testimonials</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link" onClick={closeMenu}>contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
