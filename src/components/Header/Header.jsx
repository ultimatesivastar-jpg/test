import React, { useState } from 'react';
import '../../styles/header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'services', label: 'Our Services', href: '/services' },
    { key: 'contact', label: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (navItem) => {
    setActiveNav(navItem.key);
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="Homepage">
          RAMCO
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-main" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`nav-item ${activeNav === item.key ? 'nav-item--active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
