import React from 'react';
import './ResourceSearch.css';

function ResourceSearch (props) {
  function filterResult(e, i) {
    console.log(e, i);
  }
  return (
    <input onInput={filterResult} className='resource-search' placeholder='Search Resource'/>
  );
}

export default ResourceSearch;