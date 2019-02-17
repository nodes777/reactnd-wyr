import React from "react";

const Nomatch = ({ location }) => {
	return (
		<div>
			<h3>
				404 error for<code>{location.pathname}</code>
			</h3>
		</div>
	);
};

export default Nomatch;
