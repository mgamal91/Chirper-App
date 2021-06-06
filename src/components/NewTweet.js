import React, { Component } from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {handleAddTweet} from '../actions/tweets';
export class NewTweet extends Component {
  state = { text: "", toHome:false };
  onInputChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
    document.getElementById('myBtn').style.cursor='pointer';
    /* console.log(event.target.value); */
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    console.log("submit", text);
    //TODO: Add this text to store
    //handleAddTweet=(text, replyingTo)
    const {dispatch, id}=this.props;
    dispatch(handleAddTweet(text, id))
    /* Taylor
    *this.setState(() => ({text: ''})) */
   //if there is an id means this is a reply then dont go home, if id is null that means a new tweet
   //when done redirect me back home
    this.setState({ text: "", toHome: id? false : true });
    document.getElementById('myBtn').style.cursor='not-allowed';
  };

  render() {
      const {text, toHome}=this.state;
      const tweetLeft=280-text.length;
      /* todo: redirect to home if submitted */

    if(toHome === true)
    {
      return <Redirect to='/'></Redirect>
    }
    return (
      <div>
        <h3 className="center">Compose New Tweet:</h3>
        <form className="new-tweet" onSubmit={this.onFormSubmit}>
          <textarea
            placeholder="What's happening"
            value={text}
            onChange={this.onInputChange}
            className="textarea"
            maxLength={280}
          ></textarea>
          {tweetLeft <= 100 &&
          (
             <div className="tweet-length">
                 {tweetLeft}
             </div>
          )}
          {/* added a  style={{cursor:'not-allowed'}} as the original style will still have the cursor as a hand*/}
          <button id="myBtn" className='btn' type='submit' style={{cursor:'not-allowed'}} disabled={text === ''}>Submit</button>
        </form>
      </div>
    );
  }
}
/* const mapStateToProps=(state)=>
{
    return{}
} */
export default connect(/* mapStateToProps */)(NewTweet);
