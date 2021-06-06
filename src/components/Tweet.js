import React, { Component } from "react";
import { connect } from "react-redux";
//already existing
import { formatTweet, formatDate } from "../utils/helpers";
//icons from npm i react-icons
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import TiHeartOutline from "react-icons/lib/ti/heart-outline";
import TiHeartFullOutline from "react-icons/lib/ti/heart-full-outline";
import {Link, withRouter} from 'react-router-dom';
import {handleToggleTweet} from '../actions/tweets'
export class Tweet extends Component {
  //event, parent.id
  toParent = (event, id) => {
    event.preventDefault();
    console.log("clicked", id);
    //todo:
    //redirect to the original tweet
    this.props.history.push(`/tweet/${id}`);
   
  };
  handleLike = (event) => {
    event.preventDefault();
    console.log("liked");
    const {dispatch, tweet, authedUser}=this.props;
    /* this.props. */dispatch(handleToggleTweet({id:tweet.id, authedUser:authedUser, hasLiked: tweet.hasLiked }))
  };
  render() {
    const { tweet } = this.props;
    /* formatTweet->return{name, id, timestamp, text, avatar: avatarURL, likes: likes.length, 
        replies: replies.length, hasLiked: likes.includes(authedUser), 
        parent:!parentTweet ? null : {author: parentTweet.author,id: parentTweet.id,}} */
    const { name, text, avatar, likes, replies, hasLiked, parent, id } = tweet;
    //name, text, avatar, likes, replies, hasLiked, parent
    const { time } = this.props;

    return (
      <Link to={`/tweet/${id}`} className="tweet">
        <img src={avatar} alt={`avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{time}</div>
            {/* if this is a reply to a tweet */}
            {parent && (
              <button
                className="replying-to"
                onClick={(event) => this.toParent(event, parent.id)}
              >
                Replying To: @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked ? (
                <TiHeartFullOutline className="tweet-icon" color="#e0245e" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </Link>
    );
  }
}
//ownProps==={id}
const mapStateToProps = ({ authedUser, tweets, users }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
    time: tweet?formatDate(tweet.timestamp):null,
  };
};
export default withRouter(connect(mapStateToProps)(Tweet));
