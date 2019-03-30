import {
    RESOURCES_FILTER,
    RESOURCES_LOAD,
    RESOURCES_SELECT_ONE,
    ACTIONS_LOAD
} from '../actions/';

const resources = (state = {}, action) => {
    let result;
    switch (action.type) {
        case RESOURCES_SELECT_ONE:
            let selectedResource = state.filteredResources[action.payload.id - 1];
            selectedResource['actions'] = selectedResource['actionIds'].map(id => state.actions.find(r => r.id === id));
            result = {
                ...state,
                selectedResource: selectedResource
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
        case ACTIONS_LOAD:
            // TODO: likely has to be put into a separated actions reducer
            return {
                ...state,
                actions: action.payload.actions
            };
        default:
            return state
    }
};

export default resources
