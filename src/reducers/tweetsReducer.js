import { RECIEVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";
const tweets = (myTweets = {}, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS: {
      return { ...myTweets, ...action.tweets };
    }
    case TOGGLE_TWEET: {
      //const id=action.id;
      return {
        
        //...myTweets spread all the prev tweets
        ...myTweets,
        //modify the tweet with id coming from the action
        //remember while accessing an object propert we do objName[propName][propName]
        //in spread operator we write the ...objname, propName(that needs to be modified)
        //[action.id] will return the myTweets[id] which is the tweet i pressed like/dislike on
        //but i cant use myTweets[action.id] will throw an error 
        //i could destruct the id bef return as written above and use [id] here instead which will = myTweets[id]
        //but why []? because the returned data is an obj of data not just one item
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
    case ADD_TWEET:
      {
        const {tweet}=action;
        let replyingTo={};
        //action.tweet.id the tweet coming from action creator had tweet as payload
          //get this tweet payload and access its replying to
          //if the replying too is a null(no parent)
          //else if there is a parent replyingTo: "hbsc73kzqi75rg7v1e0i6a"
          //the replyingTo var we defined here will access the property replyingTo inside the tweet coming from action
          //and get everything inside of it ...myTweets[tweet.replyingTo] 
          //then in replies add myTweets[tweet.replyTo].replies.concat([tweet.id])
          //replyTo is an array thats why we used concat
        if(tweet.replyingTo !== null)
        {
          /*
          * replyingTo is an object 
          * will have a key [tweet.replyingTo] which will be an id with the parent author
          * inside this key will add the following
          * spread everything inside this specific tweet ...myTweets[tweet.replyingTo]
          * but replies need to be modified to add the name of the user who just made the tweet
          * replies is an array so we can use concat
          * myTweets[tweet.replyingTo].replies
          * access the replies property of this exact tweet and concat to it the new id tweet.id
          * myTweets[tweet.replyingTo] === tweet.id
          */
          replyingTo={[tweet.replyingTo]:{...myTweets[tweet.replyingTo], replies:myTweets[tweet.replyingTo].replies.concat([tweet.id])}}
        }
        /* The id is actually auto generated through a fn in _DATA formatTweet 
        * when we call saveTweet with our action->_saveTweet->formatTweet*/
        return{...myTweets,
          //action.tweet.id the tweet coming from action creator had tweet as payload
          //get this tweet payload and access its id
          //we did distruction so insted of action.tweet.id we can write it as tweet.id
          //will recieve the tweet data then take replyingTo and add it to this tweet property
          //here we are using the rest operator where you take
          //[tweet.id]:tweet, ...replyingTo} if ... is removed when you are replying to a tweet the reply wont appear below
          //error will be thrown 
          [tweet.id]:tweet, ...replyingTo}
      }
    default:
      return myTweets;
  }
};
/*
const { tweet } = action

   let replyingTo = {}
   if (tweet.replyingTo !== null) {
      const allReplies = state[tweet.replyingTo].replies.concat([tweet.id]);

      return {
      ...state,
      [action.tweet.id]: action.tweet,
      [action.tweet.replyingTo.replies]: allReplies
      }
   }

   return {
      ...state,
      [action.tweet.id]: action.tweet,
      ...replyingTo,
   }
*/
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
