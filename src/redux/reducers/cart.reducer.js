import actionTypes from '../actions/action-types';

const INIT_STATE = {
    cart: []
};

export default (state = INIT_STATE, action) => {
    console.log(action)
    switch(action.type){
        case actionTypes.ADD_TO_CART: 
            return {
                cart: state.cart
                        .filter(item => item._id !== action.payload._id)
                        .concat(action.payload)
            }
        case actionTypes.REMOVE_FROM_CART: 
            return {
                cart: state.cart
                        .filter(item => item._id !== action.payload)
            }
        default: return state
    };
};