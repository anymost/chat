import * as ActionTypes from '../ActionType';

const initState = {
    registryState: 'init',
    message: ''
};

function userRegistry(state = initState, action) {
    const {type, message} = action;
    switch (type) {
    case ActionTypes.REGISTRY_INIT:
        return {registryState: 'init', message};
    case ActionTypes.REGISTRY_SUCCESS:
        return {registryState: 'success', message};
    case ActionTypes.REGISTRY_FAILED:
        return {registryState: 'failed', message};
    case ActionTypes.REGISTRY_START:
        return {registryState: 'start', message};
    default:
        return state;
    }
}

export default userRegistry;