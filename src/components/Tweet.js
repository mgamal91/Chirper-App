import React, { Component } from "react";
import { connect } from "react-redux";
//already existing
import { formatTweet, formatDate } from "../utils/helpers";
//icons from npm i react-icons
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import TiHeartOutline from "react-icons/lib/ti/heart-outline";
import TiHeartFullOutline from "react-icons/lib/ti/heart-full-outline";
export class Tweet extends Component {
  //event, parent.id
  toParent = (event, id) => {
    event.preventDefault();
    console.log("clicked", id);
    //todo:
    //redirect to the original tweet
  };
  handleLike = (event) => {
    event.preventDefault();
    console.log("liked");
  };
  render() {
    const { tweet } = this.props;
    const {
      name,
      avatar,
      text,
      hasLiked,
      likes,
      replies,
      parent,
    } = tweet;
    const { time } = this.props;

    return (
      <div className="tweet">
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
              {hasLiked === true ? (
                <TiHeartFullOutline className="tweet-icon" color="#e0245e" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
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
    time: formatDate(tweet.timestamp),
  };
};
export default connect(mapStateToProps)(Tweet);
