import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {SEND_MESSAGE_START} from '../ActionType';
import {sendMessageSuccess, sendMessageFailed} from '../actions/sendMessage';
import {chatListStart} from '../actions/chatList';


const repullMessage = (action, store, sender) => {
    if(action.code === 200){
        store.dispatch(chatListStart({id: sender}));
        return sendMessageSuccess();
    }
    return sendMessageFailed(action.message);
};

export default function sendMessage(action$, store) {
    return action$.ofType(SEND_MESSAGE_START)
        .switchMap(action => ajax.post(`${window.APIDOMAIN}/sendMessage`,
            action.payload)
            .map(data => data.response)
            .map(data => repullMessage(data, store, action.payload.sender))
            .catch(() => Observable.of(sendMessageFailed('网络异常')))
        );

}