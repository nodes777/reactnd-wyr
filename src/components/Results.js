import React from "react";

const Results = props => {
	const { question } = props;
	const optionOneVotes = question.optionOne.votes.length;
	const optionTwoVotes = question.optionTwo.votes.length;
	const total = optionOneVotes + optionTwoVotes;
	return (
		<div>
			<h1>Results</h1>
			<div>{question.optionOne.text}</div>
			<progress value={optionOneVotes} max={total} />
			<div>{(optionOneVotes / total) * 100}%</div>
			<div>
				{optionOneVotes} out of {total} votes
			</div>
			<div>or</div>
			<div>{question.optionTwo.text}</div>
			<progress value={optionTwoVotes} max={total} />
			<div>{(optionTwoVotes / total) * 100}%</div>
			<div>
				{optionTwoVotes} out of {total} votes
			</div>
		</div>
	);
};

export default Results;
