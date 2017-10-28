import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {SEND_MESSAGE_START} from '../ActionType';
import {sendMessageSuccess, sendMessageFailed} from '../actions/sendMessage';



export default function sendMessage(action$) {
    return action$.ofType(SEND_MESSAGE_START)
            .switchMap(action => ajax.post(`${window.APIDOMAIN}/sendMessage`,
                    action.payload)
                    .map(data => data.response)
                    .map(data => {
                        if(data.code === 200){
                            return sendMessageSuccess();
                        }
                        return sendMessageFailed(data.message);
                    }).catch(() => Observable.of(sendMessageFailed('网络异常')))
            );

}