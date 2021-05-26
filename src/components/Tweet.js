import React, { Component } from 'react'
import { connect } from 'react-redux';
//already existing
import { formatTweet} from '../utils/helpers'
export class Tweet extends Component {
    render() {
        const {tweet}=this.props
        return (
            <div className='tweet'>
                {tweet.text}
            </div>
        )
    }
}
//ownProps==={id}
const mapStateToProps=({authedUser, tweets, users}, ownProps)=>
{
    const tweet = tweets[ownProps.id];
    //id of the author you are replying to so i will get the tweet of this 
    //const parentTweet= tweets[tweet.replyingTo]
    //user go to a random url that tweet doesnt exist
    const parentTweet=tweet?tweets[tweet.replyingTo]:null;
   /*  return{authedUser, 
        tweet:formatTweet(tweet, users[tweet.author], authedUser, parentTweet),} */
    //same here if the tweet exist then pass the data to the formatTweet fn if not return null 
    return{authedUser, 
        tweet: tweet?formatTweet(tweet, users[tweet.author], authedUser, parentTweet):null
        
        ,}
    
}
export default connect(mapStateToProps)(Tweet);
