import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case ADD_QUESTION:
			const { question } = action;
			return {
				...state,
				// add the new question in the questions object, by id
				[question.id]: question,
				// add this question id to the list of all ids, concat returns a new array (.push returns the length)
				allIds: state.allIds.concat([question.id])
			};
		default:
			return state;
	}
}
