import React from 'react';
import './Attribute.css';

const Attribute = ({ title, value, size }) => {
  return (<div className={'attribute ' + (size ? `size_${size}`: '') }>
    <AttributeKey title={title}/>
    <AttributeValue v={value}/>
  </div>);
};

const AttributeKey = ({title}) => {
  if (!title) { return null; }
  return (<div className='attribute__key'>{title}</div>)
};

const AttributeValue = ({v}) => {
  if (!v) { return null; }
  return (<div className='attribute__value'>{v}</div>)
};

export default Attribute;