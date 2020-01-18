import actionTypes from '../actions/action-types';

const INIT_STATE = {
    all_products: [],
    cur_products: []
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_FETCHED: return {
            ...state, all_products: action.payload
        }
        default: return state
    };
};