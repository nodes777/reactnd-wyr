import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import Nav from "./Nav";
import SignIn from "./SignIn";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import NoMatch from "./NoMatch";
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
            {this.props.loaded === false ? null : (
              <div>
                {this.props.authedUser === null ? (
                  <SignIn />
                ) : (
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/leaderboard" exact component={Leaderboard} />
                    <Route path="/add" exact component={NewQuestion} />
                    <Route path="/questions/:id" exact component={Question} />
                    <Route component={NoMatch} />
                  </Switch>
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
