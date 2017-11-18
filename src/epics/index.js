import {combineEpics} from 'redux-observable';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chatList';
import chat from './chat';
import sendMessage from './sendMessage';
import fetchFriends from './fetchFriends';


const rootEpic = combineEpics(
    userLogin,
    userRegistry,
    chat,
    chatList,
    sendMessage,
    fetchFriends
);


export default rootEpic;
