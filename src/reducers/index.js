import { combineReducers } from 'redux';
import users from './usersReducer';
import tweets from './tweetsReducer';
import authedUser from './authedUserReducer';
//loader
import { loadingBarReducer } from 'react-redux-loading';

//export default combineReducers({users:users, tweets:tweets, authedUser:authedUser})
export default combineReducers({authedUser:authedUser, users:users, tweets:tweets, loadingBar:loadingBarReducer})