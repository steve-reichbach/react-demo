import React from 'react';
import './MainHeader.css';

function MainHeader (props) {
    /**/
    return (
        <header className="header">
            <img src={props['logo']} className="header__logo" alt="Logo of Plain ID" />
            <span className="header__title">PlainID Demo App</span>
        </header>
    );
}

export default MainHeader;