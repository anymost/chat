import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED} from '../ActionType';


export function startFetchFriends(data) {
    return {
        type: FETCH_FRIENDS_START,
        message: '获取好友中',
        payload: data
    };
}

export function fetchFriendsSuccess(data) {
    return {
        type: FETCH_FRIENDS_SUCCESS,
        message: '注册成功',
        payload: data
    };
}

export function fetchFriendsFailed(message) {
    return {
        type: FETCH_FRIENDS_FAILED,
        message
    };
}