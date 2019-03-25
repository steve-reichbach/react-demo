import React from 'react';
import './SubHeader.css';

function SubHeader(props) {
    return (
        <header className='subheader'>
            <h3 className='subheader__title'>{props.header}<SubHeaderHint hint={props.hint}/></h3>
            <p className='subheader__description'>{props.description}</p>
        </header>);
}

function SubHeaderHint(props) {
    if (!props.hint) { return null; }
    return (<small title={props.hint} className='section-header__hint'>?</small>);
}

export default SubHeader;