import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadResources,
    loadActions,
    getFilteredResources,
    selectResource
} from '../../redux/actions';

import { getApiData } from '../../helpers'
import SearchBox from '../SearchBox/SearchBox';
import CheckList from '../CheckList/CheckList';

import './Menu.css';

class Menu extends Component {
    async componentDidMount() {
        const data = await getApiData();
        this.props.onLoadResources(data['resources']);
        this.props.onLoadActions(data['actions']);
    }
    render() {
        return (<nav className="menu">
            <h1>My Resources</h1>
            <p>explanation under each section. maybe shows only at hover/pressed</p>
            <SearchBox inputEvent={this.props.onFilterResource} data={ this.props.filteredResources }/>
            <CheckList data={ this.props.filteredResources } selectEvent={this.props.onSelectResource}/>
        </nav>);
    };
}

const mapStateToProps = state => ({
    filteredResources: getFilteredResources(state.resources),
    resources: state.resources
});

const mapDispatchToProps = dispatch => ({
    onLoadResources: resources => dispatch(loadResources(resources)),
    onLoadActions: actions => dispatch(loadActions(actions)),
    onSelectResource: id => dispatch(selectResource(id)),
    onFilterResource: (resources, term) => dispatch(getFilteredResources(resources, term))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)