import {combineReducers} from 'redux';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chatList';
import chat from './chat';
import sendMessage from './sendMessage';
import fetchFriends from './fetchFriends';


const reducers = combineReducers({
    userLogin,
    userRegistry,
    chat,
    chatList,
    sendMessage,
    fetchFriends
});

export default reducers;