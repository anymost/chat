import {combineReducers} from 'redux';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chantList';
import chatWindow from './chatWindow';
import sendMessage from './sendMessage';


const reducers = combineReducers({
    userLogin,
    userRegistry,
    chatList,
    chatWindow,
    sendMessage
});

export default reducers;