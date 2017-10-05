import {Observable} from 'rxjs'
import {ajax} from 'rxjs/observable/dom/ajax'
import * as ActionTypes from '../ActionType'
import {chatListSuccess, chantListFailed} from "../actions/chatList"




export default function chatList(action$) {
    return action$.ofType(ActionTypes.CHAT_LIST_START)
            .switchMap(action => ajax.get(`${window.APIDOMAIN}/chatList/${action.data}`)
                    .map(data => data.response)
                    .map(data => {
                        if(data.code === 200){
                            return chatListSuccess(data.data);
                        } else {
                            return chantListFailed(data.message);
                        }
                    }).catch(() => Observable.of(chantListFailed('网络异常')))
            );

}