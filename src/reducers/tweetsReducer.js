import { RECIEVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";
const tweets = (myTweets = {}, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS: {
      return { ...myTweets, ...action.tweets };
    }
    case TOGGLE_TWEET: {
      
      return {
        //...myTweets spread all the prev tweets
        ...myTweets,
        //modify the tweet with id coming from the action
        [action.id]: {
          //return/spread everything inside this tweet
          ...myTweets[action.id],
          //modify the likes
          likes:
          /* check if this user already liked this before */
            action.hasLiked === true
              ? myTweets[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
                /* if user didnt like it yet then add his/her id to the ids of people  */
              : myTweets[action.id].likes.concat([action.authedUser]),
        },
      };
    }
    default:
      return myTweets;
  }
};

export default tweets;

/* import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    default :
      return state
  }
} 
 */
