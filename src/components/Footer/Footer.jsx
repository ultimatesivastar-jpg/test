import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'f' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { name: 'Google+', href: 'https://google.com', icon: '+' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
    { name: 'Pinterest', href: 'https://pinterest.com', icon: 'P' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="socials" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                title={social.name}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="ops">
            Operations in: USA, Canada, UK, India
          </div>
        </div>

        <div className="footer-right">
          <div className="legal">
            <div className="legal-line">
              <a href="/privacy">Privacy Policy</a>
              <span>·</span>
              <a href="/terms">Terms of Use</a>
            </div>
          </div>
          <div className="copyright">
            © {currentYear} RAMCO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
