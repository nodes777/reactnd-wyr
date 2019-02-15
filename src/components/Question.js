import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
	componentDidMount() {}

	render() {
		const { question, users } = this.props;
		console.log(this.props);
		const author = users[question.author].name;
		return (
			<div>
				<div>Asked by {author}</div>
				<img
					src={users[question.author].avatarURL}
					alt=""
					width="50"
					height="50"
				/>
				<div>Would You Rather?</div>
				<div>
					<input
						type="radio"
						id="optionOne"
						name="option"
						value={question.optionOne.text}
						defaultChecked
					/>
					<label htmlFor="optionOne">{question.optionOne.text}</label>
				</div>
				<div>or</div>
				<div>
					<input
						type="radio"
						id="optionTwo"
						name="option"
						value={question.optionTwo.text}
					/>
					<label htmlFor="optionTwo">{question.optionTwo.text}</label>
				</div>
				<button type="submit">Submit</button>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, props) {
	const { id } = props.match.params;

	return {
		authedUser: authedUser,
		users: users,
		question: questions[id]
	};
}

export default connect(mapStateToProps)(Question);
