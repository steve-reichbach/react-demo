import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadResources,
    loadActions,
    getFilteredResources,
    selectResource
} from '../../redux/actions';

import { getApiData } from '../../helpers'
import ResourceSearch from '../ResourceSearch/ResourceSearch';
import CheckList from '../CheckList/CheckList';

import './Menu.css';

// FIXME: сделать по аналогии с visibleTodoList
// В ResourceSearch и CheckList возможно надо передать методы
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const data = await getApiData();
        this.props.onLoadResources(data['resources']);
        this.props.onLoadActions(data['actions']);
    }
    render() {
        return (<nav className="menu">
            <h1>My Resources</h1>
            <p>explanation under each section. maybe shows only at hover/pressed</p>
            <ResourceSearch/>
            <CheckList data={ this.props.filteredResources } select={this.props.onSelectResource}/>
        </nav>);
    };
}

const mapStateToProps = state => ({
    filteredResources: getFilteredResources(state.resources, state.filterTerm),
    resources: state.resources
});

const mapDispatchToProps = dispatch => ({
    onLoadResources: resources => dispatch(loadResources(resources)),
    onLoadActions: actions => dispatch(loadActions(actions)),
    onSelectResource: id => dispatch(selectResource(id)),
    // onFilterResource: term => dispatch(getFilteredResources(term))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)