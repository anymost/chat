import * as ActionType from '../ActionType' ;

export function loginInit() {
    return {
        type: ActionType.LOGIN_INIT
    }
}

export function startLogin(data) {
    return {
        type: ActionType.LOGIN_START,
        payload: data
    }
}

export function loginSuccess() {
    return {
        type: ActionType.LOGIN_SUCCESS
    }
}

export function loginFailed() {
    return {
        type: ActionType.LOGIN_FAILED
    }
}
