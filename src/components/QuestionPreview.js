import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class QuestionPreview extends Component {
	render() {
		const { question, users } = this.props;
		const author = users[question.author].name;
		return (
			<div className="q-preview" key={question.id}>
				<h4>{author} asks:</h4>
				<img
					src={users[question.author].avatarURL}
					alt=""
					width="50"
					height="50"
					className="profile-pic"
				/>
				<div>Would You Rather?</div>
				<div>...{question.optionOne.text}...</div>

				<Link
					className="btn btn-success"
					to={`/questions/${question.id}`}
				>
					View Poll
				</Link>
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

export default connect(mapStateToProps)(QuestionPreview);
