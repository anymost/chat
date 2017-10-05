import {SHOW_CHAT_WINDOW} from "../ActionType";

export default function chatWindow(state = {}, action) {
    if (action.type === SHOW_CHAT_WINDOW) {
        return {
            data: action.data
        }
    } else {
        return state;
    }
}