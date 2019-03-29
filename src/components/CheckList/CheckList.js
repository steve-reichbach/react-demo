import React from 'react';
import { connect } from 'react-redux'
import { selectResource } from '../../redux/actions';

import './CheckList.css';

const CheckList = (props) => {
  const list = props.resources || [];

  return (<ul className='checklist'> {
      list.map((i, index) => {
          return (<li
              key={index}
              className={ 'checklist-item ' + (props.selected === index ? 'selected' : index)}
              onClick={props.onSelectResource(i.id)}
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