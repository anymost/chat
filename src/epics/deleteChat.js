import {DELETE_CHAT} from '../ActionType';
import {ajax} from 'rxjs/observable/dom/ajax';

function handleDelete(action) {

}

function deleteChat(action$) {
    return action$.ofType(DELETE_CHAT)
            .map(action => action.payload)
            .switchMap(payload => ajax.post(`${window.APIDOMAIN}/getChatList`,payload))
            .map(()=>handleDelete(action.payload))
}