import React, { Component } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import SectionHeader from './components/SectionHeader/SectionHeader';
import SubHeader from './components/SubHeader/SubHeader';
import Attribute from './components/Attribute/Attribute';
import ResourceSearch from './components/ResourceSearch/ResourceSearch';
import CheckList from './components/CheckList/CheckList';

import * as DATA from './stub/data.json';

import './App.css';

const getApiData = () => {
  return {"resources": [{"id": "1", "name": "Item 1", "description": "This is Item 1 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_1", "actionIds": ["1", "2", "3", "4", "5"] }, {"id": "2", "name": "Item 2", "description": "This is Item 2 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_2", "actionIds": ["6", "7", "8", "9", "10"] }, {"id": "3", "name": "Item 3", "description": "This is Item 3 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_3", "actionIds": ["1", "2", "3", "4", "5"] }, {"id": "4", "name": "Item 4", "description": "This is Item 4 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_4", "actionIds": ["6", "7", "8", "9", "10"] }, {"id": "5", "name": "Item 5", "description": "This is Item 5 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_5", "actionIds": ["1", "2", "3", "4", "5"] } ], "actions": [{"id": "1", "name": "Action 1"}, {"id": "2", "name": "Action 2"}, {"id": "3", "name": "Action 3"}, {"id": "4", "name": "Action 4"}, {"id": "5", "name": "Action 5"}, {"id": "6", "name": "Action 6"}, {"id": "7", "name": "Action 7"}, {"id": "8", "name": "Action 8"}, {"id": "9", "name": "Action 9"}, {"id": "10", "name": "Action 10"} ] };
  // return DATA;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader logo='/images/plainid-logo-white.png'/>
        <Menu data={this.data}/>
        <Content className="content"/>
      </div>
    );
  }
  componentDidMount() {
    this.data = getApiData();
  }
  componentWillUnmount() {
    // this.data = [];
  }
}

const Menu = (props) => {
  return (
    <nav className="main-menu">
      <h1>My Resources</h1>
      <p>explanation under each section. maybe shows only at hover/pressed</p>
      <ResourceSearch/>
      <CheckList data={props.data}/>
    </nav>
  );
};

const Content = (props) => {
  return (
    <section className='content'>
      <SectionHeader
          header="Chosen Item"
          description="this is another option to show the explanation under each section. maybe shows only at hover/pressed?"
      />
      <div className='content__sidebar-left'>
        <SubHeader
            header='General details'
            description='explanation under each section.'
            hint="here comes the hint"
        />
        <Attribute k="Name" v="item.name"/>
        <Attribute k="Description" v="item.description" size='l'/>
        <Attribute k="Resource type" v="item.resourceType"/>
        <Attribute k="Path" v="item.path"/>
      </div>
      <div className='content__sidebar-right'>
          <SubHeader
              header='Permitted actions'
              description='explanation under each section.'
              hint="here comes the hint"
          />
          <Attribute v="Action1"/>
      </div>
    </section>
  );
};

export default App;
