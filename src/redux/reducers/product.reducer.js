import actionTypes from '../actions/action-types';

const INIT_STATE = {
    all_products: {},
    searched_products: {}
};

const prodNormalizer = (acc, products) => {
    products.forEach( meal => acc[meal._id] = meal );
    return acc;
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_FETCHED: return {
            ...state, all_products: prodNormalizer({}, action.payload)
        }
        case actionTypes.SEARCH_LIST_FETCHED: return {
            ...state, searched_products: prodNormalizer({}, action.payload)
        }
        default: return state
    };
};