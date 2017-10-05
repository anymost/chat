import {combineReducers} from 'redux';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chantList';
import chatWindow from './chatWindow';


const reducers = combineReducers({
    userLogin,
    userRegistry,
    chatList,
    chatWindow
});

export default reducers;