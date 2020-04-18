import actionTypes from './action-types';

export const addToCart = item => ({
    type: actionTypes.ADD_TO_CART,
    payload: item
});

export const removeFromCart = id => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
});

export const setCartAddress = address => ({
    type: actionTypes.SET_CART_ADDRESS,
    payload: address
});