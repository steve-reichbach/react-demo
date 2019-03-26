import React from 'react';
import './ResourceSearch.css';

function ResourceSearch (props) {
  return (
    <input onInput={props.filter} className='resource-search' placeholder='Search Resource'/>
  );
}

export default ResourceSearch;