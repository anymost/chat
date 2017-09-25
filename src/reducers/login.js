import * as ActionTypes from '../ActionType';

export default function userLogin(state = {loginState: ActionTypes.LOGIN_INIT}, action) {
    const type = action.type;
    switch(type) {
        case ActionTypes.LOGIN_INIT:
            return {loginState: 'init'};
        case ActionTypes.LOGIN_START:
            return {loginState: 'start'};
        case ActionTypes.LOGIN_SUCCESS:
            return {loginState: 'success'};
        case ActionTypes.LOGIN_FAILED:
            return {loginState: 'failed'};
        default:
            return {loginState: 'init'};
    }
}