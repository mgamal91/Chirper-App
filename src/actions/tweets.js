export const RECIEVE_TWEETS='RECIEVE_TWEETS';

//tweets argument is recieved from the API call
/* export function recieveTweets(tweets)
{
    return {type:RECIEVE_TWEETS, tweets}
} */

export const recieveTweets=(tweets)=>
{
    return {type:RECIEVE_TWEETS, tweets}
}
