import React from 'react';
import './Hint.css';

const Hint = (props) => {
  if (!props.hint) { return null; }
  return (<small title={props.hint} className='hint'/>);
};

export default Hint;