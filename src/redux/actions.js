/*
* Action types
*/
export const SELECT_RESOURCE = 'SELECT_RESOURCE';
export const SET_FILTER_TERM = 'SET_FILTER_TERM';
export const LOAD_RESOURCES = 'LOAD_RESOURCES';

export function loadResources(data) {
  console.log('loadResources', data);
  return {
    type: LOAD_RESOURCES,
    data
  }
}

export function selectResource(id) {
  console.log('selectResource', id);
  return {
    type: SELECT_RESOURCE,
    id
  }
}

export function selectFilterTerm(text) {
  console.log("selectFilterTerm", text);
  return {
    type: SET_FILTER_TERM,
    text
  }
}
