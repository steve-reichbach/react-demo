import { combineReducers } from 'redux';
import { SELECT_RESOURCE, SET_FILTER_TERM, LOAD_RESOURCES } from './actions';

const initialState = {
  selectedResource: {},
  searchTerm: '',
  resources: [],
  filteredResources: []
};

function resourcesSelect(state=[], action) {
  switch (action.type) {
    case SELECT_RESOURCE:
      return [
        ...state,
        {
          selectedResource: state.find(r => r.id === action.id)
        }
      ];
    default:
      return state;
  }
}

function loadResources(state=[], action) {
  debugger;
  switch (action.type) {
    case LOAD_RESOURCES:
      return [
        ...state,
        {
            resources: state.data
        }
      ];
      default:
        return state;
  }
}

function resourceFilter(state = [], action) {
  switch (action.type) {
    case SET_FILTER_TERM:
      const text = action.text.toLowerCase();
      return [
        ...state,
        {
          searchTerm: text,
          filteredResources: state.filter(r => r.description.toLowerCase().includes(text))
        }
      ];
    default:
      return state;
  }
}
const demoApp = combineReducers({resourcesSelect, resourceFilter, loadResources});

export default demoApp;