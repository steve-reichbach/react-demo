export const RESOURCES_SELECT_ONE = 'RESOURCES:SELECT_ONE';
export const RESOURCES_LOAD = 'RESOURCES:LOAD';
export const RESOURCES_FILTER = 'RESOURCES:FILTER';

export const selectResource = id => ({
    type: RESOURCES_SELECT_ONE,
    id
});

export const loadResources = resources => ({
    type: RESOURCES_LOAD,
    resources
});

export const getFilteredResources = (resources, term) => ({
    type: RESOURCES_FILTER,
    resources,
    term
});
