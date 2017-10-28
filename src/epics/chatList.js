import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {chatListSuccess, chatListFailed} from '../actions/chatList';
import {showChatWindow} from '../actions/chatWindow';


const handleChatList = data => {
    return data.code === 200 ?
            chatListSuccess(data.data):
            chatListFailed(data.message);
};


export default function chatList(action$) {
    return action$.ofType(ActionTypes.CHAT_LIST_START)
            .switchMap(action => ajax.get(`${window.APIDOMAIN}/chatList/${action.data}`)
                    .map(data => data.response)
                    .map(handleChatList)
                    .switchMap(action => Observable.of(showChatWindow(action.data[0])))
                    .catch(() => Observable.of(chatListFailed('网络异常')))
            );

}