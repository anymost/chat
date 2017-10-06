import {SEND_MESSAGE_START, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED} from "../ActionType";


export default function sendMessage(state = {}, action = {}) {
    const {type, message} = action;
    switch (type) {
        case SEND_MESSAGE_START:
            return {state: 'start'};
        case SEND_MESSAGE_SUCCESS:
            return {state: 'success'};
        case SEND_MESSAGE_FAILED:
            return {state: 'failed', message};
        default:
            return state;
    }
}