import {DELETE_CHAT} from '../ActionType';

export function deleteChat(payload){
    return {
        type: DELETE_CHAT,
        payload
    };
}
