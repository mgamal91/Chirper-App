import React, { Component } from 'react'
import { connect } from 'react-redux';
//already existing
import { formatTweet, formatDate } from '../utils/helpers';
//icons from npm i react-icons
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
export class Tweet extends Component {
    render() {
        const {tweet}=this.props;
        const {name, avatar, timestamp, text, hasLiked, likes, replies, id, parent}=tweet;
        const {time}=this.props;
        return (
            <div className='tweet'>
                <img src={avatar} alt='hi' className='avatar'/>
                <br/>
                {name}
                <br/>
                {time}
                <br/>
                {text}
            </div>
        )
    }
}
//ownProps==={id}
const mapStateToProps=({authedUser, tweets, users}, {id})=>
{
    const tweet = tweets[id];
    const parentTweet=tweet?tweet[tweets.replyingTo]:null;
    return{authedUser, 
        tweet:tweet?formatTweet(tweet, users[tweet.author], authedUser, parentTweet):null,
    time:formatDate(tweet.timestamp)};
}
export default connect(mapStateToProps)(Tweet);
