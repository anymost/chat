import * as ActionType from '../ActionType' ;

export function loginInit() {
    return {
        type: ActionType.LOGIN_INIT,
        message: ''
    }
}

export function startLogin(data) {
    return {
        type: ActionType.LOGIN_START,
        message: '登录中',
        payload: data
    }
}

export function loginSuccess() {
    return {
        type: ActionType.LOGIN_SUCCESS,
        message: '登陆成功'
    }
}

export function loginFailed(message) {
    return {
        type: ActionType.LOGIN_FAILED,
        message
    }
}
