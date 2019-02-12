import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { handleLogin } from "../actions/authedUser";

class SignIn extends Component {
	componentDidMount() {}
	handleSignInBtn = () => {};
	render() {
		const { users } = this.props;
		console.log(users);
		return (
			<div className="container">
				<h1>Welcome to the Would You Rather App!</h1>
				<p>Please sign in to continue</p>
				<label htmlFor="signInSelector">Sign In</label>
				<select name="" id="signInSelector">
					{users.allIds.map(userID => (
						<option key={userID} value="">
							{users[userID].name}
						</option>
					))}
				</select>
				<button>Sign In</button>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	return {
		authedUser: authedUser,
		users: users
	};
}

export default connect(mapStateToProps)(SignIn);
