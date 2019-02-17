import React from "react";

const Results = props => {
	const { question, userChoice } = props;
	const optionOneVotes = question.optionOne.votes.length;
	const optionTwoVotes = question.optionTwo.votes.length;
	const total = optionOneVotes + optionTwoVotes;
	const optionOnePercent = (optionOneVotes / total) * 100;
	const optionTwoPercent = (optionTwoVotes / total) * 100;
	console.log(userChoice);

	const optionOneBarClass = "progress-bar bg-success w-" + optionOnePercent;
	const optionTwoBarClass = "progress-bar bg-success w-" + optionTwoPercent;
	return (
		<div className="container">
			<div>
				{question.optionOne.text}
				{userChoice === "optionOne" && (
					<span className="badge badge-info"> Your Choice</span>
				)}
			</div>
			<div className="progress" style={{ height: "30px" }}>
				<div
					className={optionOneBarClass}
					role="progressbar"
					aria-valuenow={optionOneVotes}
					aria-valuemin="0"
					aria-valuemax={total}
				/>
			</div>
			<div className="barPercentage">{optionOnePercent}%</div>
			<div>
				{optionOneVotes} out of {total} votes
			</div>
			<div>or</div>
			<div>
				{question.optionTwo.text}
				{userChoice === "optionTwow" && (
					<span className="badge badge-info"> Your Choice</span>
				)}
			</div>
			<div className="progress" style={{ height: "30px" }}>
				<div
					className={optionTwoBarClass}
					role="progressbar"
					aria-valuenow={optionTwoVotes}
					aria-valuemin="0"
					aria-valuemax={total}
				/>
			</div>
			<div className="barPercentage">{optionTwoPercent}%</div>
			<div>
				{optionTwoVotes} out of {total} votes
			</div>
		</div>
	);
};

export default Results;
