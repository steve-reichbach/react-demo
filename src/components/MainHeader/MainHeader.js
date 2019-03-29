import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="header">
      <img src="/images/plainid-logo-white.png" className="header__logo" alt="Logo of Plain ID" />
      <span className="header__title">PlainID Demo App</span>
    </header>
  );
}

export default MainHeader;