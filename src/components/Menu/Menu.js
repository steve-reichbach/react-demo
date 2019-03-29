import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadResources, getFilteredResources, selectResource } from '../../redux/actions';
import { getApiData } from '../../helpers'
import ResourceSearch from '../ResourceSearch/ResourceSearch';
import CheckList from '../CheckList/CheckList';

import './Menu.css';

const DATA_CACHE = [];

const filterResources = (resources, term = '') => {
    if (!term.trim()) {
        return DATA_CACHE;
    }
    return resources.filter(r => r.description.toLowerCase().includes(term.trim().toLowerCase()))
};
// FIXME: сделать по аналогии с visibleTodoList
// В ResourceSearch и CheckList возможно надо передать методы
class Menu extends Component {
    constructor(props) {
        super(props);
        // this.props.onLoadResources.bind(this);
    }
    async componentDidMount() {
        const data = await getApiData();
        console.log('componentDidMount', data);
        // debugger;
        this.props.onLoadResources(data);
    }
    render() {
        return (<nav className="menu">
            <h1>My Resources</h1>
            <p>explanation under each section. maybe shows only at hover/pressed</p>
            <ResourceSearch/>
            <CheckList/>
        </nav>);
    };
}

const mapStateToProps = state => ({
    filteredResources: filterResources(state.resources, state.filterTerm),
    resources: loadResources(state.resources)
});

const mapDispatchToProps = dispatch => ({
    onLoadResources: resources => dispatch(loadResources(resources)),
    onSelectResource: id => dispatch(selectResource(id)),
    onFilterResource: term => dispatch(getFilteredResources(term))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)