import { RECIEVE_TWEETS } from "../actions/tweets";

export default function tweets (state = {}, action) {
  switch (action.type) {
    case RECIEVE_TWEETS: {
      return { ...state, ...action.tweets };
    }
    default:
      return state;
  }
};


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