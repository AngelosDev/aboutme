import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Angelos Devletoglou</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/adevletoglou/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/LI-In-Bug.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/AngelosDev" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src="/github-icon.png" alt="GitHub" />
        </a>
        <a href="/Angelos Devletoglou CV - pub.pdf" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src="/cv-icon.png" alt="CV" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
