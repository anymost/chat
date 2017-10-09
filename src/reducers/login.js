import * as ActionTypes from '../ActionType';

const initState = {
    loginState: 'init',
    message: '',
    data: null
};

export default function userLogin(state = initState, action) {
    const type = action.type;
    switch(type) {
        case ActionTypes.LOGIN_INIT:
            return {loginState: 'init'};
        case ActionTypes.LOGIN_START:
            return {loginState: 'start', message: action.message};
        case ActionTypes.LOGIN_SUCCESS:
            return {loginState: 'success', message: action.message, data: action.data};
        case ActionTypes.LOGIN_FAILED:
            return {loginState: 'failed', message: action.message};
        default:
            return state;
    }
}