export const getApiData = () => {
    const API_PATH = '//localhost:3001/api';
    return fetch(API_PATH).then(res => res.json());
};
