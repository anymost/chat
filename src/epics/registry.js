import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionType';
import {registrySuccess, registryFailed} from '../actions/registry';
import {saveUserInfo} from '../tools/index';


export default function userRegistry(action$) {
    return action$.ofType(ActionTypes.REGISTRY_START)
            .switchMap(action => ajax.post(`${window.APIDOMAIN}/registry`, action.payload)
                    .map(data => data.response)
                    .map(data => {
                        if(data.code === 200){
                            saveUserInfo(data);
                            return registrySuccess();
                        } else {
                            return registryFailed(data.message);
                        }
                    }).catch(() => Observable.of(registryFailed('网络异常')))
            );

}