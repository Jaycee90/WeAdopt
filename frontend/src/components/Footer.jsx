import React from 'react';
import '/src/css/Footer.css';

function Footer() {
  return (
    <footer className="footerbox">
      <div className="footer-content">
        <div className="footer-text">
          <p><small>© 2024 Jayce Turambe Website. All rights reserved.</small></p>
          {/* <p>Remember to connect with me! </p> */}
        </div>
      </div>

      <div className="footer-linkedin">
        <a href="https://www.linkedin.com/in/Jayce90" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="footer-github">
        <a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
