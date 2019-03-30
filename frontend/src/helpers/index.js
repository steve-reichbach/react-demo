const API_PATH = '//localhost:3001/api';
const DEFAULT_DEBOUNCE = 200;

export const getApiData = () => {
    return fetch(API_PATH).then(res => res.json());
};

export const debounce = function (func, wait = DEFAULT_DEBOUNCE, immediate) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(this, args)
        }, wait);
        if (immediate && !timeout) func.apply(this, [...args])
    }
};
