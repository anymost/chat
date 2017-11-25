import {DELETE_CHAT_LIST, DELETE_CHAT_LIST_SUCCESS} from '../ActionType';

export function deleteChatList(payload) {
    return {
        type: DELETE_CHAT_LIST,
        payload
    };
}

export function deleteChatListSuccess(payload) {
    return {
        type: DELETE_CHAT_LIST_SUCCESS
    };
}

