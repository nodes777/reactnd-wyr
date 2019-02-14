import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Question from "./Question";

class Home extends Component {
	componentDidMount() {}
	handleLogoutBtn = () => {
		// because we're connected (mapStateToProps), this is available in props
		const { dispatch } = this.props;
	};
	state = {
		showQuestions: "unanswered"
	};
	render() {
		const { authedUser, users, questions } = this.props;
		console.log(this.props);
		const answeredQuestionIDs = questions.allIds.filter(currentValue => {
			return (
				Object.keys(users[authedUser].answers).indexOf(currentValue) >
				-1
			);
		});

		const unansweredQuestionIDs = questions.allIds.filter(currentValue => {
			return (
				Object.keys(users[authedUser].answers).indexOf(currentValue) ===
				-1
			);
		});
		return (
			<div className="container">
				<button
					onClick={() =>
						this.setState({ showQuestions: "unanswered" })
					}
				>
					Unanswered Question
				</button>
				<button
					onClick={() => this.setState({ showQuestions: "answered" })}
				>
					Answered Questions
				</button>
				{this.state.showQuestions === "unanswered"
					? unansweredQuestionIDs.map(questionID => (
							<Question
								key={questionID}
								questionID={questionID}
							/>
					  ))
					: answeredQuestionIDs.map(questionID => (
							<Question
								key={questionID}
								questionID={questionID}
							/>
					  ))}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	// BUG: Loading will be true when the user logs out
	let loading = authedUser === null;

	return {
		loading: loading,
		authedUser: authedUser,
		users: users,
		questions: questions,
		userName: authedUser === null ? null : users[authedUser].name
	};
}

export default connect(mapStateToProps)(Home);
