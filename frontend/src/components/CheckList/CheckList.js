import React from 'react';

import './CheckList.css';

const CheckList = ({data, selectEvent}) => {
    // if (!data.payload.resources.filteredResources) {
    //     return null
    // }

  return (<ul className='checklist'> {
      data.payload.resources.filteredResources.map((i, index) => {
          return (<li
              key={index}
              className={ 'checklist-item ' + (i.id === data.payload.resources.selectedResource.id ? 'selected' : '') }
              onClick={() => selectEvent(i.id) }
          >{i.name}</li>)
      })
  }</ul>);
};

export default CheckList;
