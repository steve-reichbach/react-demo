import React from 'react';
import './SectionHeader.css';

function SectionHeader(props) {
    return (
        <header className='section-header'>
            <h3 className='section-header__title'>{props.header}<SectionHeaderHint hint={props.hint}/></h3>
            <p className='section-header__description'>{props.description}</p>
        </header>);
}

function SectionHeaderHint(props) {
    if (!props.hint) { return null; }
    return (<small title={props.hint} className='section-header__hint'>?</small>);
}

export default SectionHeader;