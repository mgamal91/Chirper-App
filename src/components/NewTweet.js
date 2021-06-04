import React, { Component } from "react";

export class NewTweet extends Component {
  state = { text: "" };
  onInputChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
    console.log(event.target.value);
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    console.log("submit", text);
    //TODO: Add this text to store
    /* Taylor
    *this.setState(() => ({text: ''})) */
    this.setState({ text: "" });
  };

  render() {
      const {text}=this.state;
      const tweetLeft=280-text.length;
      /* todo: redirect to home if submitted */
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
          <button className='btn' type='submit' disabled={text === ''}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTweet;
