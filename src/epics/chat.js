import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {chatSuccess, chatFailed} from '../actions/chat';

function handleChat(data, {sender}) {
    if (data.code === 200) {
        data.sender = sender;
        return chatSuccess(data);
    }
    return  chatFailed(data.message);
}

export default function chat(action$) {
    return action$.ofType(ActionTypes.CHAT_START)
        .switchMap(action => ajax.post(`${window.APIDOMAIN}/getChat`, {
            id: action.data.id,
            sender: action.data.sender
        })
            .map(data => data.response)
            .map(data => handleChat(data, {sender: action.data.sender}))
            .catch(() => Observable.of(chatFailed('网络异常'))));
}

