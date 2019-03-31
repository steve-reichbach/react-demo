import React from 'react';
import './SubHeader.css';
import Hint from '../Hint/Hint.js';

const SubHeader = ({header, description, hint}) => {
  return (
    <header className='subheader'>
      <h3 className='subheader__title'>{header}<Hint hint={hint}/></h3>
      <p className='subheader__description'>{description}</p>
    </header>);
};

export default SubHeader;