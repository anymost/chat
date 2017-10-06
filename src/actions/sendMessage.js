import {SEND_MESSAGE_START, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED} from "../ActionType";

export function startSendMessage(data) {
    return {
        type: SEND_MESSAGE_START,
        payload: data
    }
}

export function sendMessageSuccess() {
    return {
        type: SEND_MESSAGE_SUCCESS,
    }
}

export function sendMessageFailed(message) {
    return {
        type: SEND_MESSAGE_FAILED,
        message
    }
}