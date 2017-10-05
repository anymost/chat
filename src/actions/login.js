import {LOGIN_INIT, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from "../ActionType"
export function loginInit() {
    return {
        type: LOGIN_INIT,
        message: ''
    }
}

export function startLogin(data) {
    return {
        type: LOGIN_START,
        message: '登录中',
        payload: data
    }
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
        message: '登陆成功'
    }
}

export function loginFailed(message) {
    return {
        type: LOGIN_FAILED,
        message
    }
}