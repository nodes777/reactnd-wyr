import React from "react";

const Poll = props => {
	const {
		question,
		handleSubmit,
		handleOptionChange,
		selectedAnswer
	} = props;
	return (
		<div>
			<div>
				<input
					type="radio"
					id="optionOne"
					name="option"
					onChange={handleOptionChange}
					value="optionOne"
					checked={selectedAnswer === "optionOne"}
				/>
				<label htmlFor="optionOne">{question.optionOne.text}</label>
			</div>
			<div>or</div>
			<div>
				<input
					type="radio"
					id="optionTwo"
					name="option"
					onChange={handleOptionChange}
					value="optionTwo"
					checked={selectedAnswer === "optionTwo"}
				/>
				<label htmlFor="optionTwo">{question.optionTwo.text}</label>
			</div>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default Poll;
