import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';

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
      filteredResources: [],
      actions: [],
      selectedResourceIndex: 3
    };

    this.filterResources = this.filterResources.bind(this);
    this.selectResource = this.selectResource.bind(this);
  }

  filterResources(event) {
    const term = event.target.value;
    const stateObject = { selectedResourceIndex: -1 };

    if (!term) {
      stateObject['filteredResources'] = this.state.resources;
    } else {
      stateObject['filteredResources'] = this.state.resources.filter(r => r['description'].toLowerCase().includes(term.toLowerCase()))
    }

    this.setState(stateObject);
  }

  selectResource(event, i) {
    // console.log('chooseResource', event.target, i);
  }

  render() {
    return (
      <div className='App'>
        <MainHeader logo='/images/plainid-logo-white.png'/>
        <Menu
            list={this.state.filteredResources}
            selected={this.state.selectedResourceIndex}
            filter={this.filterResources.bind(this)}
            select={this.selectResource.bind(this)}
        />
        <Content data={this.state.filteredResources[this.state.selectedResourceIndex]} className="content"/>
      </div>
    );
  }

  async componentDidMount() {
    const response = await getApiData();
    const data = await response.json();

    this.setState({
      resources: data['resources'],
      filteredResources: data['resources'],
      actions: data['actions']
    });
  }
}

export default App;
