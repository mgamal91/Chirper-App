import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount()
  {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}
const mapStateToProps=(state)=>
{
  console.log('memo',state);
return {tweets:state.tweets, users:state.users}
}
export default connect(mapStateToProps)(App)