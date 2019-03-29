import React from 'react';

import './CheckList.css';

const CheckList = ({data, select}) => {
  if (!data.payload.resources.filteredResources) {
      return null
  }

  return (<ul className='checklist'> {
      data.payload.resources.filteredResources.map((i, index) => {
          return (<li
              key={index}
              className={ 'checklist-item ' }
              onClick={() => select(i.id) }
          >{i.name}</li>)
      })
  }</ul>);
};
export default CheckList;
