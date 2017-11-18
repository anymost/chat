import {CHAT_START, CHAT_SUCCESS, CHAT_FAILED} from '../ActionType';


export function startChat(payload) {
    return {
        type: CHAT_START,
        data: payload
    };
}

export function chatSuccess(payload) {
    return {
        type: CHAT_SUCCESS,
        data: payload
    };
}

export function chatFailed(payload) {
    return {
        type: CHAT_FAILED,
        message: payload
    };
}
