import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default function Nav() {
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
