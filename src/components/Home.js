import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Question from "./Question";

class Home extends Component {
	componentDidMount() {}
	state = {
		showQuestions: "unanswered"
	};
	render() {
		const { authedUser, users, questions } = this.props;
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

		let unansweredButton = "btn";
		let answeredButton = "btn";
		if (this.state.showQuestions === "unanswered") {
			unansweredButton += " active";
		} else {
			answeredButton += " active";
		}

		return (
			<div className="container">
				<button
					className={unansweredButton}
					onClick={() =>
						this.setState({ showQuestions: "unanswered" })
					}
				>
					Unanswered Questions
				</button>
				<button
					className={answeredButton}
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
