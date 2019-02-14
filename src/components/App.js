import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import Nav from "./Nav";
import SignIn from "./SignIn";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    console.log(this.props);
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App center">
            <Nav />
            {this.props.loaded === false ? null : (
              <div>
                {this.props.authedUser === null ? (
                  <SignIn />
                ) : (
                  <Fragment>
                    <Home />
                    <Leaderboard />
                  </Fragment>
                )}
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    authedUser: authedUser,
    loaded: loadingBar.default === 0
  };
}

export default connect(mapStateToProps)(App);
