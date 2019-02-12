export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAuthedUser = user => {
	return {
		type: SET_AUTHED_USER,
		user
	};
};

export function handleLogout() {
	return dispatch => {
		// optimistic update
		dispatch(setAuthedUser(null));

		// return saveLikeToggle(info).catch((e) => {
		// 	console.warn(`Error in handleToggleTweet: ${e}`)
		// 	// reset it to initial
		// 	dispatch(toggleTweet(info))
		// 	alert(`There was an error liking the tweet, try again`)
		// })
	};
}

export function handleLogin(userID) {
	return dispatch => {
		// optimistic update
		dispatch(setAuthedUser(userID));

		// return saveLikeToggle(info).catch((e) => {
		// 	console.warn(`Error in handleToggleTweet: ${e}`)
		// 	// reset it to initial
		// 	dispatch(toggleTweet(info))
		// 	alert(`There was an error liking the tweet, try again`)
		// })
	};
}
