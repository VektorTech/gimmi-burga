import actionTypes from './action-types';

export const getAllProducts = () => {
    return {
        type: actionTypes.GET_ALL_PRODUCTS
    }
};

export const getSearchList = (query) => {
    return {
        type: actionTypes.GET_SEARCH_LIST,
        payload: query
    }
};