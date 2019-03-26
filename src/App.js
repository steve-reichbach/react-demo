import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import ResourceSearch from './components/ResourceSearch/ResourceSearch';
import CheckList from './components/CheckList/CheckList';
import Content from './components/Content/Content';

import './App.css';

async function getApiData() {
  const API_PATH = '//localhost:3001/api';
  return fetch(API_PATH);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      actions: [],
      selectedResource: 3
    };

    // this.filterResources = this.filterResources.bind(this);
  }
/*
  filterResources(event) {
      // const res
      this.setState({
          resources: []
      });
  }
*/

  render() {
    /*<MainHeader logo='/images/plainid-logo-white.png'/>*/
    return (
      <div className="App">
        <Menu list={this.state.resources} selected={this.state.selectedResource}/>
        <Content data={this.state.resources[this.state.selectedResource]} className="content"/>
      </div>
    );
  }
  async componentDidMount() {
    // this.data = getApiData();
    const response = await getApiData();

    const data = await response.json();
    this.setState({
      resources: data['resources'],
      actions: data['actions']
    });
  }
}

const Menu = (props) => {
  return (
    <nav className="main-menu">
      <h1>My Resources</h1>
      <p>explanation under each section. maybe shows only at hover/pressed</p>
      <ResourceSearch/>
      <CheckList data={props.list} selected={props.selected}/>
    </nav>
  );
};

export default App;
