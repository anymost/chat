import {Observable} from 'rxjs'
import {ajax} from 'rxjs/observable/dom/ajax'
import * as ActionTypes from '../ActionType'
import {loginSuccess, loginFailed} from "../actions/login"


export default function userLogin(action$) {
    return action$.ofType(ActionTypes.LOGIN_START)
            .switchMap(action => ajax.post(`${window.APIDOMAIN}/login`,
                    action.payload,{withCredentials: true})
                    .map(loginSuccess).catch(() => Observable.of(loginFailed()))
            );

}