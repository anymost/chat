import {Observable} from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import {FETCH_FRIENDS_START} from '../ActionType';
import {fetchFriendsSuccess, fetchFriendsFailed} from
    '../actions/fetchFriends';

const handleFetchFriends = (data) => {
    if (data.code === 200) {
        return fetchFriendsSuccess(data);
    }
    return fetchFriendsFailed(data.message);

};

export default function fetchFriends(action$) {
    return action$.ofType(FETCH_FRIENDS_START)
        .map(action => action.payload)
        .switchMap(data => ajax.get(`${window.APIDOMAIN}/fetchFriends?id=${data}`)
            .map(data => data.response)
            .map(data => handleFetchFriends(data))
            .catch(error => Observable.of(fetchFriendsFailed('网络错误')))
        );
}