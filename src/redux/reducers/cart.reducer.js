import actionTypes from '../actions/action-types';

const INIT_STATE = {
    cart: []
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART: 
            return {
                address: state.address,
                cart: state.cart
                        .filter(item => item._id !== action.payload._id)
                        .concat(action.payload)
            }
        case actionTypes.REMOVE_FROM_CART: 
            return {
                address: state.address,
                cart: state.cart
                        .filter(item => item._id !== action.payload)
            }
        case actionTypes.SET_CART_ADDRESS:
            return {
                cart: state.cart,
                address: action.payload
            }
        default: return state
    };
};