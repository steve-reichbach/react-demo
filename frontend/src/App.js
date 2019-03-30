import React, { Component } from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <div className='App__content'>
          <Menu/>
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
