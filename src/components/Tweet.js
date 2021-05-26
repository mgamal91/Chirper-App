import React, { Component } from 'react'
import { connect } from 'react-redux';
//already existing
import { formatTweet} from '../utils/helpers'
export class Tweet extends Component {
    render() {
        return (
            <div className='tweet'>
                
            </div>
        )
    }
}
//ownProps==={id}
const mapStateToProps=({authedUser, tweets, users}, ownProps)=>
{
    //console.log('tweet_tweets', ownProps);
    //console.log('tweet_users', users);
    //formatTweet (tweet, author, authedUser, parentTweet)
    //users is an object with names used as keys miada:{}, nada:{}
    //tweets is an object with id used as keys and it have same name used in users inside with property author
    //check myReadME for a snippet of how the tweets and users looks like
    const tweet = tweets[ownProps.id];
    return{authedUser, 
        tweet:formatTweet(tweet, users[tweet.author], authedUser),}
}
export default connect(mapStateToProps)(Tweet);
