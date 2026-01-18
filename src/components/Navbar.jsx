import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      padding: 'var(--spacing-md) 0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', color: 'var(--text-primary)' }}>Supun.</Link>

        <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center' }}>
          {/* Links removed as per user request */}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a href="/path-to-cv" download style={{
            padding: '10px 24px',
            backgroundColor: 'var(--accent-color)',
            color: '#ffffff',
            borderRadius: 'var(--radius-pill)',
            fontWeight: 600,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
