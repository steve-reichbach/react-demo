import React from 'react';
import { connect } from 'react-redux'
import { selectResource } from '../../redux/actions';

import './CheckList.css';

const CheckList = ({data}) => {
  debugger;
  if (!data.resources.filteredResources) { return null }
  return (<ul className='checklist'> {
      data.resources.filteredResources.map((i, index) => {
          return (<li
              key={index}
              className={ 'checklist-item ' }
              onClick={(e) => { console.log("resources") } }
          >{i.name}</li>)
      })
  }</ul>);
};
export default CheckList;
/*
const getFilteredResources = (resources = [], term = '') => {
    return resources.filter(r => r.description.toLowerCase().includes(term.toLowerCase()));
};

const mapStateToProps = state => ({
    resources: state.resources,
    selectedResources: getFilteredResources(state.resources, state.filterTerm)
});

const mapDispatchToProps = dispatch => ({
    onSelectResource: id => dispatch(selectResource(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckList);
*/