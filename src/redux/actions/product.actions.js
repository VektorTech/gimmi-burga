import actionTypes from './action-types';

export const getAllProducts = () => ({
    type: actionTypes.GET_ALL_PRODUCTS
});

export const getSearchList = query => ({
    type: actionTypes.GET_SEARCH_LIST,
    payload: query
});