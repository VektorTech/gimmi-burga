import actionTypes from './action-types';

export const setUser = (user) => {
    return {
        type: actionTypes.SET_CUR_USER,
        payload: user
    }
};

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT_USER,
    }
};