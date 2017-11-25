import {DELETE_CHAT_LIST} from '../ActionType';
import {ajax} from 'rxjs/observable/dom/ajax';
import {deleteChatListSuccess} from '../actions/deleteChat';
import {chatListStart} from '../actions/chatList';

function handleDelete(payload, store) {
    store.dispatch(chatListStart({
        id: payload.id
    }));
    return deleteChatListSuccess();
}

export default function deleteChat(action$, store) {
    return action$.ofType(DELETE_CHAT_LIST)
        .map(action => action.payload)
        .switchMap(payload => ajax.post(`${window.APIDOMAIN}/deleteChatList`,payload)
            .map(()=>handleDelete(payload, store)));
}