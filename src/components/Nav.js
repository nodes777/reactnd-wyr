import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { handleLogout } from "../actions/authedUser";

class Nav extends Component {
	componentDidMount() {}
	handleLogoutBtn = () => {
		// because we're connected (mapStateToProps), this is available in props
		const { dispatch } = this.props;
		dispatch(handleLogout());
	};
	render() {
		const { authedUser, userName } = this.props;
		return (
			<nav className="nav">
				<ul>
					<li>
						<NavLink to="/" exact>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/new">New Question</NavLink>
					</li>
					<li>
						<NavLink to="/leaderboard">Leaderboard</NavLink>
					</li>
					{userName && (
						<Fragment>
							<li>Hello, {userName}</li>
							<li>
								<button
									className=""
									onClick={this.handleLogoutBtn}
								>
									Logout
								</button>
							</li>
						</Fragment>
					)}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	// BUG: Loading will be true when the user logs out
	let loading = authedUser === null;

	return {
		loading: loading,
		authedUser: authedUser,
		userName: authedUser === null ? null : users[authedUser].name
	};
}

export default connect(mapStateToProps)(Nav);
