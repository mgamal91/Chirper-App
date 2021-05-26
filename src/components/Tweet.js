import React, { Component } from 'react'
import { connect } from 'react-redux';
//already existing
import { formatTweet, formatDate } from '../utils/helpers'
export class Tweet extends Component {
    render() {
        const {avatar, name,text}=this.props.tweet;
        const {time, parentTweet}=this.props;
        return (
            <div className='tweet'>
                <img src={this.props.tweet.avatar} alt='hi' className='avatar'/>
                <br/>
                {this.props.tweet.name}
                <br/>
                {this.props.time}
                <br/>
                {/* {parentTweet === null ? console.log('null'):<span>replies to {this.props.tweet.parentTweet}</span>} */}
                <br/>
                {this.props.tweet.text}
                
            </div>
        )
    }
}
//ownProps==={id}
const mapStateToProps=({authedUser, tweets, users}, {id})=>
{
    //console.log('tweet_tweets', tweets);
    //console.log('tweet_users', users);
    //formatTweet (tweet, author, authedUser, parentTweet)
    //users is an object with names used as keys miada:{}, nada:{}
    //tweets is an object with id used as keys and it have same name used in users inside with property author
    //check myReadME for a snippet of how the tweets and users looks like
    const tweet = tweets[id];
    //check if the tweet have replies yet or not to add the text of replyingto who
    //will return the id of the one this tweet is replying to
    const parentTweet=tweet[tweets.replyingTo];
    return{authedUser, 
        tweet:formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
    time:formatDate(tweet.timestamp), parentTweet};
}
export default connect(mapStateToProps)(Tweet);
