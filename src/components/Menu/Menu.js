import React from 'react';

import ResourceSearch from '../ResourceSearch/ResourceSearch';
import CheckList from '../CheckList/CheckList';

import './Menu.css';

const Menu = (props) => {
    return (
        <nav className="menu">
            <h1>My Resources</h1>
            <p>explanation under each section. maybe shows only at hover/pressed</p>
            <ResourceSearch filter={props.filter}/>
            <CheckList
                data={props.list}
                selected={props.selected}
                select={props.select}
            />
        </nav>
    );
};

export default Menu;