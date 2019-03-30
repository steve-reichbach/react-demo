import React from 'react';
import './ResourceSearch.css';

const ResourceSearch = ({data, inputEvent}) => {
  return (
    <input onInput={(e) => inputEvent(data, e.target.value) } className='resource-search' placeholder='Search Resource'/>
  );
};

export default ResourceSearch;
