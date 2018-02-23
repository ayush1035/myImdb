import * as path from "../constants/pathConstants.js";

export const getApiCall = () => {
    let url = path.PATH_GET+path.PATH_API_KEY;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

export const getApiDetailCall = (imdbID) => {
    let url = path.PATH_DETAIL_GET+ imdbID+path.PATH_API_KEY;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};

export const getApiSearchCall = (searchData) => {
    let url = path.PATH_SEARCH + searchData + path.PATH_API_KEY;
    return fetch(url, {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
};


