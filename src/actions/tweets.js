import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading} from 'react-redux-loading'
export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET="ADD_TWEET";

//tweets argument is recieved from the API call
/* export function recieveTweets(tweets)
{
    return {type:RECIEVE_TWEETS, tweets}
} */

export const recieveTweets = (tweets) => {
  return { type: RECIEVE_TWEETS, tweets };
};
//export function _saveLikeToggle ({ id, hasLiked, authedUser })
export const toggleTweet = ({ id, hasLiked, authedUser }) => {
  return { type: TOGGLE_TWEET, id, authedUser, hasLiked };
};
export const handleToggleTweet = (info) => {
  return (dispatch) => {
    //dispatch first to update UI first then return the data of like from API
    dispatch(toggleTweet(info));
    //catch any error in like(the part starting with catch can be removed)
    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleToggleTweet:", e);
      //set toggle  tweet to its initial state
      dispatch(toggleTweet(info));
      alert("error liking the tweet!");
    });
  };
};
//this is how it was supposed to look like but if we did that 
//there will be a lag why?
//UI will only update after receiving confirmation that the backend was updated successfully
//so we will dispatch the action first
//call the back end API
//optimistic update
/* export const handleToggleTweet=(info)=>
{
  return (dispatch)=>
  {
    return saveLikeToggle(info).then(()=>
    {
      dispatch(toggleTweet(info));
    })
  }
}
 */

//TODO: Add a tweet
//will recieve text from the user in the NewTweet comp
export const addTweet=(tweet)=>
{
  return{type:ADD_TWEET, tweet}
}
export const handleAddTweet=(text, replyingTo)=>
{
  //getState currentState of our store
  return (dispatch, getState)=>
  {
    const {authedUser}=getState();
    dispatch(showLoading());
//if this tweet have a reply to property(replyingTo is passed to it)
//_saveTweet ({ text, author, replyingTo })
return saveTweet({
  text, 
  author:authedUser,
  replyingTo})
  //once saveTweet is done pass the tweet OBJECT to the addTweet action(the above one) to pass it to reducer
  .then((tweet)=>dispatch(addTweet(tweet)))
  //once passing is done hide loader
  .then(()=>dispatch(hideLoading()))
 
/* return saveTweet({
  text,
  author: authedUser,
  replyingTo
})
  .then((tweet) => dispatch(addTweet(tweet)))
  .then(() => dispatch(hideLoading())) */

}
}