import * as ActionTypes from '../ActionType'

export function chatListStart(payload) {
    return {
        type: ActionTypes.CHAT_LIST_START,
        data: payload.id
    }
}

export function chatListSuccess(payload) {
    return {
        type: ActionTypes.CHAT_LIST_SUCCESS,
        data: payload
    }
}

export function chantListFailed(message) {
    return {
        type: ActionTypes.CHAT_LIST_FAILED,
        data: message
    }
}