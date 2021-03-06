import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionPreview from "./QuestionPreview";
import { byTimeStamp } from "../utils/utils.js";

class Home extends Component {
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

		let unansweredButton = "btn btn-primary";
		let answeredButton = "btn btn-primary";
		if (this.state.showQuestions === "unanswered") {
			unansweredButton = "btn btn-outline-primary";
		} else {
			answeredButton = "btn btn-outline-primary";
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
					? unansweredQuestionIDs
							.sort((a, b) => {
								return (
									questions[b].timestamp -
									questions[a].timestamp
								);
							})
							.map(questionID => (
								<QuestionPreview
									key={questionID}
									question={questions[questionID]}
								/>
							))
					: answeredQuestionIDs
							.sort((a, b) => {
								return (
									questions[b].timestamp -
									questions[a].timestamp
								);
							})
							.map(questionID => (
								<QuestionPreview
									key={questionID}
									question={questions[questionID]}
								/>
							))}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		authedUser: authedUser,
		users: users,
		questions: questions,
		userName: authedUser === null ? null : users[authedUser].name
	};
}

export default connect(mapStateToProps)(Home);
