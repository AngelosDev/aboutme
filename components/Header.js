import React from 'react';

const Header = ({ title, subtitle }) => (
  <header>
    <img src="/avatar.png" alt="Angelos Devletoglou" className="avatar" />
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <link rel="icon" href="/favicon.ico" />
  </header>
);

export default Header;
