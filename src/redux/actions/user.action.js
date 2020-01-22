import actionTypes from './action-types';

export const setUser = (user) => {
    return {
        type: actionTypes.SET_CUR_USER,
        payload: user
    }
};