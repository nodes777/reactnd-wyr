import React from "react";

const Results = props => {
	const { question, userChoice } = props;
	const optionOneVotes = question.optionOne.votes.length;
	const optionTwoVotes = question.optionTwo.votes.length;
	const total = optionOneVotes + optionTwoVotes;
	console.log(userChoice);
	return (
		<div>
			<h2>Results</h2>
			<div>
				{question.optionOne.text}{" "}
				{userChoice === "optionOne" && <span> Your Choice</span>}
			</div>

			<progress value={optionOneVotes} max={total} />
			<div>{(optionOneVotes / total) * 100}%</div>
			<div>
				{optionOneVotes} out of {total} votes
			</div>
			<div>or</div>
			<div>
				{question.optionTwo.text}{" "}
				{userChoice === "optionTwow" && <span> Your Choice</span>}
			</div>

			<progress value={optionTwoVotes} max={total} />
			<div>{(optionTwoVotes / total) * 100}%</div>
			<div>
				{optionTwoVotes} out of {total} votes
			</div>
		</div>
	);
};

export default Results;
