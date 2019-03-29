import { RESOURCES_FILTER, RESOURCES_LOAD, RESOURCES_SELECT_ONE } from '../actions/';

const resources = (state = {}, action) => {
    let result;
    switch (action.type) {
        case RESOURCES_SELECT_ONE:
            result = {
                ...state,
                selectedResource: state.filteredResources[action.payload.id - 1]
            };
            return result;
        case RESOURCES_LOAD:
            result = {
                ...state,
                resources: action.payload.resources,
                filteredResources: action.payload.resources,
                filterTerm: ''
            };
            return result;
        case RESOURCES_FILTER:
            if (!action.payload.term) {
                // FIXME: donno
                return {
                    ...state,
                    filteredResources: state.resources
                }
            }
            console.log('RESOURCES_FILTER', state, action);
            result = {
                ...state,
                filteredResources: state.resources
            };
            return result;
        default:
            return state
    }
};

export default resources
