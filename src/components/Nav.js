import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
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
				</ul>
				{/* if logged in, render the profile link, and logout button here*/}
			</nav>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(Nav);
