import React from 'react';
import './ResourceSearch.css';
import { connect } from 'react-redux'
import { getFilteredResources } from '../../redux/actions';

const ResourceSearch = (props) => {
  return (
    <input onInput={props.onInput} className='resource-search' placeholder='Search Resource'/>
  );
};

const mapStateToProps = (state) => ({
  filterTerm: state.filterTerm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInput: () => dispatch(getFilteredResources(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceSearch)
