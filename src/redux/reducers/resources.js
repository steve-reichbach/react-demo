import {RESOURCES_FILTER, RESOURCES_LOAD, RESOURCES_SELECT_ONE } from '../actions/';

const resources = (state = [], action) => {
    let result;
    switch (action.type) {
        case RESOURCES_SELECT_ONE:
            result = [
                ...state,
                {
                    id: action.id,
                }
            ];
            console.log("RESOURCES:SELECT_ONE reducer has been fired", result);
            return result;
        case RESOURCES_LOAD:
            result = {
                ...state,
                resources: action.resources
            };
            console.log("RESOURCES:LOAD reducer", result);
            return result;
        case RESOURCES_FILTER:
            result = {
                ...state,
                filteredResources: state.resources.filter(r => r.description.includes(action.term))
            };
            return result;
        default:
            return state
    }
};

export default resources
