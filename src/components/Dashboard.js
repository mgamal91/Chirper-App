import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

export class Dashboard extends Component {
  render() {
    const {tweetIds}=this.props;
    console.log(tweetIds);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {tweetIds.map((tweetID) => (
            <li key={tweetID}>
              <div>Tweet ID:{tweetID}</div>
              <Tweet id={tweetID}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ tweets }) => {
  //Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object
  //sort from newsest to oldest
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};
export default connect(mapStateToProps)(Dashboard);
