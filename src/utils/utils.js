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
