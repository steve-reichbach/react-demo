export const RESOURCES_SELECT_ONE = 'RESOURCES:SELECT_ONE';
export const RESOURCES_LOAD = 'RESOURCES:LOAD';
export const RESOURCES_FILTER = 'RESOURCES:FILTER';

export const ACTIONS_LOAD = 'ACTIONS:LOAD';

export const loadResources = resources => ({
    type: RESOURCES_LOAD,
    payload: { resources }
});

export const selectResource = id => ({
    type: RESOURCES_SELECT_ONE,
    payload: { id }
});

export const getFilteredResources = (resources, term) => ({
    type: RESOURCES_FILTER,
    payload: {
        resources,
        term
    }
});

export const loadActions = actions => ({
    type: ACTIONS_LOAD,
    payload: { actions }
});
