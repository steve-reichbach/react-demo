import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';

import './App.css';

import { createStore } from 'redux';
import demoApp from './redux/reducer';
import {
    selectResource,
    selectFilterTerm,
    loadResources
} from './redux/actions';

const store = createStore(demoApp);
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(selectResource({id: 2}));


async function getApiData() {
  const API_PATH = '//localhost:3001/api';
  return fetch(API_PATH);
}

class App extends Component {
  constructor(props) {
    super(props);
/*
    this.state = {
      resources: [],
      filteredResources: [],
      actions: [],
      selectedResourceIndex: 3
    };
*/
    this.filterResources = this.filterResources.bind(this);
    // this.selectResource = this.selectResource.bind(this);
  }

  filterResources(event) {
    const term = event.target.value;
    store.dispatch(selectFilterTerm(term));
  }

  selectResource(event, i) {
    // console.log('chooseResource', event.target, i);
  }

  render() {
    return (
      <div className='App'>
        <MainHeader logo='/images/plainid-logo-white.png'/>
        <Menu
            filter={this.filterResources.bind(this)}
            select={this.selectResource.bind(this)}
        />
        <Content data={[]} className="content"/>
      </div>
    );
  }

  async componentDidMount() {
    const response = await getApiData();
    const data = await response.json();

    store.dispatch(loadResources(data['resources']));
    /*
    this.setState({
      resources: data['resources'],
      filteredResources: data['resources'],
      actions: data['actions']
    });
    */
  }
  componentWillUnmount() {
    unsubscribe();
  }
}

export default App;
