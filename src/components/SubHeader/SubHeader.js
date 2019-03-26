import React from 'react';
import './SubHeader.css';
import Hint from '../Hint/Hint.js';

function SubHeader(props) {
  return (
    <header className='subheader'>
      <h3 className='subheader__title'>{props.header}<Hint hint={props.hint}/></h3>
      <p className='subheader__description'>{props.description}</p>
    </header>);
}

export default SubHeader;