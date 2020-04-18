import actionTypes from './action-types';

export const setUser = user => ({
    type: actionTypes.SET_CUR_USER,
    payload: user
});

export const signOut = () => ({
    type: actionTypes.SIGN_OUT_USER,
});