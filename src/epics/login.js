import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {loginSuccess, loginFailed} from '../actions/login';
import {saveUserInfo} from '../tools/index';





function chooseToDispatch(data) {
    if(data.code === 200){
        saveUserInfo(data);
        return loginSuccess(data);
    }
    return loginFailed(data.message);

}

export default function userLogin(action$) {
    return action$.ofType(ActionTypes.LOGIN_START)
        .switchMap(action => ajax.post(`${window.APIDOMAIN}/login`, action.payload)
            .map(data => data.response)
            .map(data => chooseToDispatch(data))
            .catch(() => Observable.of(loginFailed('网络异常')))
        );

}
