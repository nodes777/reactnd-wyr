import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
	componentDidMount() {}
	state = {
		optionOne: "",
		optionTwo: "",
		toHome: false
	};

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
		const { dispatch, authedUser } = this.props;

		const info = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		};

		dispatch(handleAddQuestion(info));

		this.setState(() => ({
			toHome: true
		}));
	};

	render() {
		if (this.state.toHome) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<h1>Create a New Question</h1>
				<div>Complete the question</div>
				<div>Would you rather</div>
				<input
					type="text"
					onChange={this.handleTextEntryOptionOne}
					value={this.state.optionOne}
				/>
				<div>or</div>
				<input
					type="text"
					onChange={this.handleTextEntryOptionTwo}
					value={this.state.optionTwo}
				/>
				<button onClick={this.handleSubmit}>Submit</button>
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
