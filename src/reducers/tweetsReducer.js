import { RECIEVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";
const tweets = (myTweets = {}, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS: {
      return { ...myTweets, ...action.tweets };
    }
    case TOGGLE_TWEET: {
      //...myTweets all the prev tweets
      return {
        ...myTweets,
        [action.id]: {
          ...myTweets[action.id],
          likes:
            action.hasLiked === true
              ? myTweets[action.id].likes.filter(
                  (uid) => uid !== action.authedUser
                )
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
