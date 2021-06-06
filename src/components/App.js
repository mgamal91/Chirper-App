import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import TweetPage from "./TweetPage";
import NewTweet from "./NewTweet";
import Nav from "./Nav";
import P404 from "./P404";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <LoadingBar />
            <div className="container">
              <Nav />
              {/* id coming from url :id */}
              {/* match.params.id */}
              {this.props.loading === true ? null : (
                <div>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/new" component={NewTweet} />
                  <Route path="/tweet/:id" component={TweetPage} />
                  {/*       <Route path="/tweet" component={}><TweetPage match={{params:{id:'8xf0y6ziyjabvozdd253nd'}}}/></Route>
                   */}
                   <Route path="" component={P404}/>
                </div>
              )}
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return { loading: authedUser === null };
};
export default connect(mapStateToProps)(App);
