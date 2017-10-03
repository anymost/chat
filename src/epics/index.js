
import {combineEpics} from 'redux-observable'
import userLogin from './login'
import userRegistry from './registry'



const rootEpic = combineEpics(
        userLogin,
        userRegistry
);


export default rootEpic
