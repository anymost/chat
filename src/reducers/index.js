import {combineReducers} from 'redux';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chantList'


const reducers = combineReducers({
    userLogin,
    userRegistry,
    chatList
});

export default reducers;