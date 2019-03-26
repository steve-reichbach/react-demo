import React from 'react';

import './CheckList.css';

function CheckList (props) {
  const list = [
    {"id": "1", "name": "Item 1", "description": "This is Item 1 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_1", "actionIds": ["1", "2", "3", "4", "5"] },
    {"id": "2", "name": "Item 2", "description": "This is Item 2 description", "resourceType": "x resource type 1", "path": "servers/security/resources/item_2", "actionIds": ["6", "7", "8", "9", "10"] }
  ].map(i => <CheckListItem key={i.id} item={i}/>);
  return (<ul className='checklist'>{list}</ul>);
}

function CheckListItem(props) {
  const item = props.item;
  return <li className='checklist-item'>{item.name}</li>;
}

export default CheckList;
