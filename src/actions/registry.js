import {REGISTRY_INIT, REGISTRY_START, REGISTRY_SUCCESS, REGISTRY_FAILED } from '../ActionType';

export function registryInit() {
    return {
        type: REGISTRY_INIT,
        message: ''
    }
}

export function startRegistry(data) {
    return {
        type: REGISTRY_START,
        message: '注册中',
        payload: data
    }
}

export function registrySuccess() {
    return {
        type: REGISTRY_SUCCESS,
        message: '注册成功'
    }
}

export function registryFailed(message) {
    return {
        type: REGISTRY_FAILED,
        message
    }
}