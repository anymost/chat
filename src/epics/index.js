
import {combineEpics} from 'redux-observable'
import userLogin from './login'



const rootEpic = combineEpics(
        userLogin
);


export default rootEpic
