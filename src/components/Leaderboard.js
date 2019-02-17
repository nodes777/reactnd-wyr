import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { byScore } from "../utils/utils";

class Leaderboard extends Component {
	componentDidMount() {}

	render() {
		const { users } = this.props;
		return (
			<div>
				{users.allIds
					// is there a better way to refactor this?
					// if I try to import a sort(byScore) function from utils, I lose access to the users object
					.sort((a, b) => {
						const userA = users[a];
						const askedA = userA.questions.length;
						const answeredA = Object.keys(userA.answers).length;
						const scoreA = askedA + answeredA;

						const userB = users[b];
						const askedB = userB.questions.length;
						const answeredB = Object.keys(userB.answers).length;
						const scoreB = askedB + answeredB;

						return scoreB - scoreA;
					})
					.map(userId => {
						const currentUser = users[userId];
						const asked = currentUser.questions.length;
						const answered = Object.keys(currentUser.answers)
							.length;
						const score = asked + answered;
						return (
							<div key={userId}>
								<h2>{currentUser.name}</h2>
								<div>Asked {asked}</div>
								<div>Answered {answered}</div>
								<div>Score {score}</div>
							</div>
						);
					})}
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users: users
	};
}

export default connect(mapStateToProps)(Leaderboard);
