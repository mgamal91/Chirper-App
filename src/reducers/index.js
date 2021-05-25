import { combineReducers } from 'redux';
import users from './usersReducer';
import tweets from './tweetsReducer';
import authedUser from './authedUserReducer';

//export default combineReducers({users:users, tweets:tweets, authedUser:authedUser})
export default combineReducers({authedUser:authedUser, users:users, tweets:tweets})