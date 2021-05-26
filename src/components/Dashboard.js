import React, { Component } from "react";
import { connect } from "react-redux";
//import tweets from "../reducers/tweetsReducer";
export class Dashboard extends Component {
  render() {
    const {tweetIds}=this.props;
    console.log(tweetIds);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {tweetIds.map((tweet) => (
            <li key={tweet}>
              <div>Tweet ID:{tweet}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
/* const mapStateToProps = ({ tweets }) => {
  //Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object
  //sort from newsest to oldest
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}; */
const mapStateToProps = (state) => {
  //Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object
  //sort from newsest to oldest
   console.log('meme',state);
   return {
    tweets:state.tweets,
    tweetIds:Object.keys(state.tweets).sort((a,b)=>state.tweets[b].timestamp - state.tweets[a].timestamp)
  };
};
export default connect(mapStateToProps)(Dashboard);
