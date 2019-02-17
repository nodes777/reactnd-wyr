import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
	state = {
		optionOne: "",
		optionTwo: ""
	};

	// can this be refactored to one handle text entry?
	handleTextEntryOptionOne = e => {
		const text = e.target.value;
		this.setState(() => ({
			optionOne: text
		}));
	};

	handleTextEntryOptionTwo = e => {
		const text = e.target.value;
		this.setState(() => ({
			optionTwo: text
		}));
	};

	handleSubmit = e => {
		e.preventDefault();
		const { optionOne, optionTwo } = this.state;
		const { dispatch, authedUser, history } = this.props;

		const info = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		};

		dispatch(handleAddQuestion(info)).then(() => {
			history.push("/");
		});
	};

	render() {
		return (
			<div>
				<h1>Create a New Question</h1>
				<div>Complete the question</div>
				<div>Would you rather</div>
				<input
					aria-label="Add a question"
					type="text"
					onChange={this.handleTextEntryOptionOne}
					value={this.state.optionOne}
				/>
				<div>or</div>
				<input
					aria-label="Add a question"
					type="text"
					onChange={this.handleTextEntryOptionTwo}
					value={this.state.optionTwo}
				/>
				<div>
					<button
						className="btn btn-success mt-2"
						onClick={this.handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser: authedUser
	};
}

export default connect(mapStateToProps)(NewQuestion);
