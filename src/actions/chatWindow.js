import {SHOW_CHAT_WINDOW} from "../ActionType";

export function showChatWindow(payload) {
    return {
        type: SHOW_CHAT_WINDOW,
        data: payload
    };
}