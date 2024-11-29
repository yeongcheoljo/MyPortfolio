import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 My Portfolio. All rights reserved.</p>
      <div className="footer-icons">
        {/* GitHub Icon */}
        <a
          href="https://github.com/yeongcheoljo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <FaGithub className="footer-icon" />
        </a>
        {/* Email Icon */}
        <a
          href="mailto:c0808yc@naver.com"
          className="footer-icon-link"
        >
          <FaEnvelope className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;