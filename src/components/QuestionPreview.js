import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class QuestionPreview extends Component {
	componentDidMount() {}

	render() {
		const { question, questions, users } = this.props;
		const author = users[question.author].name;
		return (
			<div key={question.id}>
				<div>{author} asks:</div>
				<img
					src={users[question.author].avatarURL}
					alt=""
					width="50"
					height="50"
				/>
				<div>Would You Rather?</div>
				<div>...{question.optionOne.text}...</div>

				<Link to={`/question/${question.id}`}>View Poll</Link>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		authedUser: authedUser,
		users: users,
		questions: questions
	};
}

export default connect(mapStateToProps)(QuestionPreview);
