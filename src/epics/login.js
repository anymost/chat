import {Observable} from 'rxjs'
import {ajax} from 'rxjs/observable/dom/ajax'
import * as ActionTypes from '../ActionType'
import {loginSuccess, loginFailed} from "../actions/login"


export default function userLogin(action$) {
    return action$.ofType(ActionTypes.LOGIN_START)
            .mapTo(action => action.payload)
            .switchMap(data => ajax.post('//localhost:3000/login', data)
                    .map(loginSuccess).catch(() => Observable.of(loginFailed()))
            );

}