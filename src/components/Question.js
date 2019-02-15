import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Question extends Component {
	componentDidMount() {}

	render() {
		const { authedUser, users, questions, questionID } = this.props;
		return (
			<div key={questionID}>
				<div>Would You Rather?</div>
				<div>
					<input
						type="radio"
						id="optionOne"
						name="option"
						value="questions[questionID].optionOne.text"
						checked
					/>
					<label for="optionOne">
						{questions[questionID].optionOne.text}
					</label>
				</div>
				<div>or</div>
				<div>
					<input
						type="radio"
						id="optionTwo"
						name="option"
						value="questions[questionID].optionTwo.text"
						checked
					/>
					<label for="optionTwo">
						{questions[questionID].optionTwo.text}
					</label>
				</div>
				<button type="submit">Submit</button>
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

export default connect(mapStateToProps)(Question);
