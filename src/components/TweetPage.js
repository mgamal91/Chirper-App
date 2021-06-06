import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  render() {
    //const {id}=this.props.match.params;
    const { id, replies } = this.props;
    return (
      <div>
        Tweet Page
        {/* pass the id to Tweet comp to display this specific tweet */}
        {/* pass NewTweet the id to know this is  replyTo not just a new tweet*/}
        <Tweet id={id} />
        <NewTweet id={id} />
        {/*  <p>{replies.length}</p> */}
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        {/* loop over the replies to get id of replies then pass those ids to Tweet comp to show tweets*/}
        <ul>
          {/*  {replies.map(replyId=><li>{replyId}</li>)} */}
          {replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>
        {/* <p>{this.state.tweet.text}</p> */}
      </div>
    );
  }
}

/* const mapStateToProps=(state, ownProps)=> */
const mapStateToProps = ({ authedUser, tweets, users }, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    id,
    //no tweet with this id
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
};
export default connect(mapStateToProps)(TweetPage);
