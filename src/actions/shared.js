import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

//Authed users to pass to action(authedUser.js)
const AUTHED_ID = "sarah_edo";
//Authed users

//async request
export function handleInitialData () {
  return (dispatch) => {
    //call the API and pass both actions the data they need
    //recieveUsers with users
    //recieveTweets with tweets
    //the authed is passed manually here not from api hence const above
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
