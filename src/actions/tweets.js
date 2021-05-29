import { saveLikeToggle } from "../utils/api";

export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

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
    dispatch(toggleTweet(info));
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
