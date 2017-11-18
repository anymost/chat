import {CHAT_START, CHAT_SUCCESS, CHAT_FAILED} from '../ActionType';

export default function chat(state = {}, action = {}) {
    switch (action.type) {
    case CHAT_START:
        return {
            chatState: 'start',
        };
    case CHAT_SUCCESS:
        return {
            chatState: 'success',
            data: action.data
        };
    case CHAT_FAILED:
        return {
            chatState: 'failed',
            message: action.message
        };
    default:
        return {
            chatState: 'init'
        };
    }
}