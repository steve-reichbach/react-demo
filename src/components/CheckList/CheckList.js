import React from 'react';

import './CheckList.css';

const CheckList = (props) => {
  const list = props.data;
  if (!list) { return null }

  return (<ul className='checklist'> {
      list.map((i, index) => {
          return (<li
              key={index}
              className={ 'checklist-item ' + (props.selected === index ? 'selected' : index)}
              onClick={props.select}
          >{i.name}</li>)
      })
  }</ul>);
};

export default CheckList;
