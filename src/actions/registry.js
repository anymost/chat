import * as ActionTypes from '../ActionType';

export function registryInit() {
    return {
        type: ActionTypes.REGISTRY_INIT,
        message: ''
    }
}

export function startRegistry(data) {
    return {
        type: ActionTypes.REGISTRY_START,
        message: '注册中',
        payload: data
    }
}

export function registrySuccess() {
    return {
        type: ActionTypes.REGISTRY_SUCCESS,
        message: '注册成功'
    }
}

export function registryFailed(message) {
    return {
        type: ActionTypes.REGISTRY_FAILED,
        message
    }
}