import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Angelos Devletoglou</p>
      <a
        href="https://www.linkedin.com/in/adevletoglou/"
        className="linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/LI-In-Bug.png" alt="LinkedIn" />
      </a>
    </footer>
  );
};

export default Footer;
