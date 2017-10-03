import * as ActionTypes from '../ActionType'


export default function chatList(state = {}, action) {
    const {type, data} = action;
    switch (type) {
        case ActionTypes.CHAT_LIST_START:
            return {
                chatListState: 'start',
                data: []
            };
        case ActionTypes.CHAT_LIST_SUCCESS:
            return {
                chatListState: 'success',
                data
            };
        case ActionTypes.CHAT_LIST_FAILED:
            return {
                chatListState: 'failed',
                data
            };
        default:
            return {};
    }
}