import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
	componentDidMount() {}

	render() {
		const { users } = this.props;
		return (
			<div>
				{users.allIds.map(user => {
					const currentUser = users[user];
					const asked = currentUser.questions.length;
					const answered = Object.keys(currentUser.answers).length;
					const score = asked + answered;
					return (
						<div key={user}>
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

function mapStateToProps({ users, questions }) {
	return {
		users: users,
		questions: questions
	};
}

export default connect(mapStateToProps)(Leaderboard);
