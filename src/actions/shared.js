import { getInitialData } from "../utils/api";
import {recieveUsers} from './users';
import {recieveTweets} from './tweets'
//async request
export default handleInitialData = () => {
  return (dispatch) => {
      //call the API and pass both actions the data they need 
      //recieveUsers with users
      //recieveTweets with tweets
      return getInitialData().then(({users, tweets})=>{
          dispatch(recieveUsers(users));
          dispatch(recieveTweets(tweets))

      })
  };
};
