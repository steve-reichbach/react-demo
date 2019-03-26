import React from 'react';
import './Attribute.css';

function Attribute (props) {
  return (<dl className={'attribute ' + (props.size ? `size_${props.size}`: '') }>
    <AttributeKey k={props.k}/>
    <dd className='attribute__value'>{props.v}</dd>
  </dl>);
}

function AttributeKey(props) {
  if (!props.k) { return null; }
  return (<dt className='attribute__key'>{props.k}</dt>)
}

export default Attribute;