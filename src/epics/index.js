
import {combineEpics} from 'redux-observable'
import userLogin from './login'
import userRegistry from './registry'
import chatList from './chatList'



const rootEpic = combineEpics(
        userLogin,
        userRegistry,
        chatList
);


export default rootEpic
