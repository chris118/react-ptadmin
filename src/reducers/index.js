import { combineReducers } from 'redux';
import auth from './auth'
import header from './header'

const rootReducer  = combineReducers({
    auth,
    header
});

export default rootReducer;