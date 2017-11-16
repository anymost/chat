import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {chatListSuccess, chatListFailed} from '../actions/chatList';
import {showChatWindow} from '../actions/chatWindow';


const handleChatList = (action, store)=> {
    if (action.code === 200) {
        store.dispatch(showChatWindow(action.data[0]));
        return chatListSuccess(action.data);
    }
    return chatListFailed(action.message);
};


export default function chatList(action$, store) {
    return action$.ofType(ActionTypes.CHAT_LIST_START)
        .switchMap(action => ajax.post(`${window.APIDOMAIN}/getChatList`,
            {id: action.data})
            .map(data => data.response)
            .map(action => handleChatList(action, store))
            .catch(() => Observable.of(chatListFailed('网络异常')))
        );

}