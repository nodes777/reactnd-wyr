import React, { Component } from "react";
import { connect } from "react-redux";

import { handleAddQuestionAnswer } from "../actions/questions";

import Poll from "./Poll";
import Results from "./Results";

class Question extends Component {
	componentDidMount() {}

	state = {
		selectedAnswer: "optionOne"
	};

	handleOptionChange = e => {
		const text = e.target.value;
		this.setState(() => ({
			selectedAnswer: text
		}));
	};

	handleSubmit = e => {
		e.preventDefault();
		const { selectedAnswer } = this.state;
		const { dispatch, authedUser, qid } = this.props;

		const info = {
			answer: selectedAnswer,
			qid: qid,
			authedUser: authedUser
		};

		dispatch(handleAddQuestionAnswer(info));
	};

	render() {
		const { question, users, authedUser, qid } = this.props;
		const author = users[question.author].name;
		// is there a better way to check if this question has been answered by this user?
		const questionAnswered = users[authedUser].answers.hasOwnProperty(qid);
		const userChoice = users[authedUser].answers[qid];

		return (
			<div>
				<div>Asked by {author}</div>
				<img
					src={users[question.author].avatarURL}
					alt=""
					width="50"
					height="50"
				/>
				<h1>Would You Rather?</h1>
				{questionAnswered ? (
					<Results question={question} userChoice={userChoice} />
				) : (
					<Poll
						question={question}
						selectedAnswer={this.state.selectedAnswer}
						handleOptionChange={this.handleOptionChange}
						handleSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, props) {
	const { id } = props.match.params;

	return {
		authedUser: authedUser,
		users: users,
		question: questions[id],
		qid: id
	};
}

export default connect(mapStateToProps)(Question);
