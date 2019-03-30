import React from 'react';
import './SearchBox.css';
import { debounce } from '../../helpers';

const API_DELAY = 500;

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.method = debounce(this.typeIn, API_DELAY);
    }
    typeIn(data, event) { this.props.inputEvent(data, event) }
    render() {
        return <input
            onInput={(e) => this.method(this.props.data, e.target.value) }
            className='search-box'
            placeholder='Search Resource'/>
    }
}

export default SearchBox;
