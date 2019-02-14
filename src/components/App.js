import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import Nav from "./Nav";
import SignIn from "./SignIn";
import Home from "./Home";
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
                <SignIn />
                <Home />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loaded: loadingBar.default === 0
  };
}

export default connect(mapStateToProps)(App);
