import {combineReducers} from 'redux';
import userLogin from './login';
import userRegistry from './registry';


const reducers = combineReducers({
    userLogin,
    userRegistry
});

export default reducers;