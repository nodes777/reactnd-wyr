import React, { Component } from "react";
import { connect } from "react-redux";

import { handleLogin } from "../actions/authedUser";

class SignIn extends Component {
	handleSignInBtn = () => {
		const { dispatch } = this.props;
		dispatch(handleLogin(this.state.selectValue));
	};

	state = {
		selectValue: this.props.users.allIds[0]
	};

	handleChangeOption = e => {
		this.setState({
			selectValue: e.target.value
		});
		console.log(this.state);
	};

	render() {
		const { users } = this.props;
		return (
			<div className="container">
				<h1>Welcome to the Would You Rather App!</h1>
				<p>Please sign in to continue</p>
				<label htmlFor="signInSelector">Sign In</label>
				<select
					name=""
					id="signInSelector"
					value={this.state.selectValue}
					onChange={this.handleChangeOption}
				>
					{users.allIds.map(userID => (
						<option key={userID} value={userID}>
							{users[userID].name}
						</option>
					))}
				</select>
				<button onClick={e => this.handleSignInBtn(e)}>Sign In</button>
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
