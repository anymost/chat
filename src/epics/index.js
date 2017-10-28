import {combineEpics} from 'redux-observable';
import userLogin from './login';
import userRegistry from './registry';
import chatList from './chatList';
import sendMessage from './sendMessage';


const rootEpic = combineEpics(
    userLogin,
    userRegistry,
    chatList,
    sendMessage
);


export default rootEpic;
