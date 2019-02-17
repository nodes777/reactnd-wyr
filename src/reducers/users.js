import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};

		case ADD_QUESTION_ANSWER:
			return {
				...state,
				// the user that answered the question
				[action.answer.authedUser]: {
					...state[action.answer.authedUser],
					// change that users answers property
					answers: {
						// include the previous contents
						...state[action.answer.authedUser].answers,
						// add the new qid with the property of the answer
						[action.answer.qid]: action.answer.answer
					}
				}
			};
		default:
			return state;
	}
}
