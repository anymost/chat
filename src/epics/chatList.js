import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {chatListSuccess, chatListFailed} from '../actions/chatList';
import {startChat} from '../actions/chat';


const handleChatList = (action, store, id)=> {
    if (action.code === 200) {
        if (action.data[0]) {
            store.dispatch(startChat({
                id,
                sender: action.data[0].sender
            }));
        }
        return chatListSuccess(action.data);
    }
    return chatListFailed(action.message);
};


export default function chatList(action$, store) {
    return action$.ofType(ActionTypes.CHAT_LIST_START)
        .switchMap(action => ajax.post(`${window.APIDOMAIN}/getChatList`,
            {id: action.data})
            .map(data => data.response)
            .map(data => handleChatList(data, store, action.data))
            .catch(() => Observable.of(chatListFailed('网络异常')))
        );

}