import React from 'react';
import './Hint.css';

const Hint = ({hint}) => {
  if (!hint) { return null; }
  return (<small title={hint} className='hint'/>);
};

export default Hint;