import {FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED}
    from '../ActionType';

const initState = {
    fetchState: 'init',
    message: '',
    data: null
};

export default function fetchFriends(state = initState, action) {
    const type = action.type;
    switch(type) {
    case FETCH_FRIENDS_START:
        return {fetchState: 'start', message: action.message};
    case FETCH_FRIENDS_SUCCESS:
        return {fetchState: 'success', message: action.message, data: action.payload};
    case FETCH_FRIENDS_FAILED:
        return {fetchState: 'failed', message: action.message};
    default:
        return state;
    }
}