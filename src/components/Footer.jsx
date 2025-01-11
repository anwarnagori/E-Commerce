import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              We are a team of passionate professionals dedicated to creating
              exceptional digital experiences. From website design to digital
              marketing, we help businesses grow online.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="footer-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Information</h3>
            <p className="footer-text">Email: contact@mywebsite.com</p>
            <p className="footer-text">Phone: +123 456 7890</p>
            <p className="footer-text">
              Address: 123 Main Street, City, Country
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Subscribe to Our Newsletter</h3>
            <p className="footer-text">
              Get the latest updates and offers directly to your inbox.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">
            Facebook
          </a>
          <a href="https://twitter.com" className="social-icon">
            Twitter
          </a>
          <a href="https://linkedin.com" className="social-icon">
            LinkedIn
          </a>
          <a href="https://instagram.com" className="social-icon">
            Instagram
          </a>
        </div>
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
