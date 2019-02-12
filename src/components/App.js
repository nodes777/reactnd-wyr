import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import Nav from "./Nav";
import SignIn from "./SignIn";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App center">
            <Nav />
            {this.props.usersAreLoaded === true ? null : (
              <div>
                <SignIn />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersAreLoaded:
      Object.entries(users).length === 0 && users.constructor === Object
  };
}

export default connect(mapStateToProps)(App);
