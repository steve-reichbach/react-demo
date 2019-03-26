import React from 'react';

import './CheckList.css';

function CheckList (props) {
  const list = props.data;
  if (!list) { return null }
  const items = list.map((i, index) => {
    return (<li key={index} className={ 'checklist-item ' + (props.selected === index ? 'selected' : '')}>{i.name}</li>)
  });
  return (<ul className='checklist'>{items}</ul>);
}

export default CheckList;
