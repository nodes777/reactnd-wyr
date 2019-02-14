import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Question extends Component {
	componentDidMount() {}

	render() {
		const { authedUser, users, questions, questionID } = this.props;
		return (
			<div key={questionID}>
				<div>Would You Rather?</div>
				<div>{questions[questionID].optionOne.text}</div>
				<div>or</div>
				<div>{questions[questionID].optionTwo.text}</div>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	// BUG: Loading will be true when the user logs out
	let loading = authedUser === null;

	return {
		authedUser: authedUser,
		users: users,
		questions: questions
	};
}

export default connect(mapStateToProps)(Question);
