import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      <Header />
      
      <main>
        {currentPage === 'home' && (
          <>
            {/* About Section - Hero */}
            <section className="hero">
              <div className="container">
                <div className="hero-content">
                  <h1>About</h1>
                  <h2 className="hero-subtitle">Empowering Your Business with Smart Technology Solutions</h2>
                  <p className="hero-description">
                    We provide software development, web development, AI services, migration services, 
                    IT-enabled services, cybersecurity, and payroll solutions—all designed to help your 
                    business grow efficiently and securely.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('services')}
                    className="cta-button"
                  >
                    Our Services / We do →
                  </button>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
              <div className="container">
                <h2>Why Choose Us?</h2>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <h3>Expertise Across Technologies</h3>
                    <p>Skilled engineers across multiple IT domains.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>Proactive Problem Solving</h3>
                    <p>Identifying and resolving issues before they impact your business.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>Customized Solutions</h3>
                    <p>Tailored services to meet your unique requirements.</p>
                  </div>
                  <div className="benefit-item">
                    <h3>24/7 Assistance</h3>
                    <p>Round-the-clock support to minimize downtime.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="contact-cta">
              <div className="container">
                <h2>Contact Us</h2>
                <p>Ready to optimize your technology and grow your business?</p>
                <a href="/contact" className="cta-button">
                  Contact Us →
                </a>
              </div>
            </section>
          </>
        )}

        {currentPage === 'services' && (
          <section className="services-page">
            <div className="container">
              <button 
                onClick={() => setCurrentPage('home')}
                className="back-btn"
              >
                ← Back
              </button>
              <h1>What We Offer</h1>
              <div className="services-grid-full">
                <div className="service-card-full">
                  <div className="service-icon">💻</div>
                  <h3>Software Development</h3>
                  <p>Custom software solutions tailored to your business needs</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">🌐</div>
                  <h3>Web Development</h3>
                  <p>Modern, responsive web applications for optimal user experience</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">🤖</div>
                  <h3>AI Services</h3>
                  <p>Intelligent automation and machine learning solutions</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">🚀</div>
                  <h3>Migration Services</h3>
                  <p>Seamless transition from legacy systems to modern platforms</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">⚙️</div>
                  <h3>IT-Enabled Services</h3>
                  <p>Comprehensive IT solutions to streamline your operations</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">🔒</div>
                  <h3>Cybersecurity</h3>
                  <p>Robust security measures to protect your digital assets</p>
                </div>
                <div className="service-card-full">
                  <div className="service-icon">💰</div>
                  <h3>Payroll Solutions</h3>
                  <p>Efficient payroll management and HR automation</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
