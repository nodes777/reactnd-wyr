export const byTimeStamp = (a, b) => {
	const timestampA = a.timestamp;
	const timestampB = b.timestamp;

	let comparison = 0;
	if (timestampA > timestampB) {
		comparison = 1;
	} else if (timestampA < timestampB) {
		comparison = -1;
	}
	return comparison;
};

export const byScore = (users, a, b) => {
	console.log(users);
	console.log(a);
	const scoreA =
		users[a].questions.length + Object.keys(users[a].answers).length;
	const scoreB =
		users[b].questions.length + Object.keys(users[b].answers).length;

	let comparison = 0;
	if (scoreA > scoreB) {
		comparison = 1;
	} else if (scoreA < scoreB) {
		comparison = -1;
	}
	return comparison;
};
