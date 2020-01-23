import actionTypes from '../actions/action-types';

const INIT_STATE = {
    current_user: null
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case actionTypes.SET_CUR_USER: return {
            current_user: action.payload
        }
        case actionTypes.SIGN_OUT_USER: return {
            current_user: null
        }
        default: return state
    };
};