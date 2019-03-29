import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <MainHeader/>
        <Menu/>
        <Content/>
      </div>
    );
  }
}

export default App;
