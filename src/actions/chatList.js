import {CHAT_LIST_START, CHAT_LIST_SUCCESS, CHAT_LIST_FAILED} from '../ActionType';

export function chatListStart(payload) {
    return {
        type: CHAT_LIST_START,
        data: payload.id
    };
}

export function chatListSuccess(payload) {
    return {
        type: CHAT_LIST_SUCCESS,
        data: payload
    };
}

export function chatListFailed(message) {
    return {
        type: CHAT_LIST_FAILED,
        data: message
    };
}