import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/images/plainid-logo-white.png" className="header__logo" alt="Logo of Plain ID" />
      <span className="header__title">PlainID Demo App</span>
    </header>
  );
}

export default Header;