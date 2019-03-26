import React from 'react';
import './SectionHeader.css';
import Hint from '../Hint/Hint';

function SectionHeader(props) {
    return (
        <header className='section-header'>
            <h3 className='section-header__title'>{props.header}<Hint hint={props.hint}/></h3>
            <p className='section-header__description'>{props.description}</p>
        </header>);
}

export default SectionHeader;