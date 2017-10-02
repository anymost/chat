import {Observable} from 'rxjs'
import {ajax} from 'rxjs/observable/dom/ajax'
import * as ActionTypes from '../ActionType'
import {loginSuccess, loginFailed} from "../actions/login"



export default function userLogin(action$) {
    return action$.ofType(ActionTypes.LOGIN_START)
            .switchMap(action => ajax.post(`${window.APIDOMAIN}/login`, action.payload)
                    .map(data => data.response)
                    .map(data => {
                        if(data.result === 200){
                            localStorage.setItem('id', data.data.id);
                            return loginSuccess();
                        } else {
                            return loginFailed(data.message);
                        }
                    }).catch(() => Observable.of(loginFailed('网络异常')))
            );

}