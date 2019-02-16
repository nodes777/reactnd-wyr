import {
	RECEIVE_QUESTIONS,
	ADD_QUESTION,
	ADD_QUESTION_ANSWER
} from "../actions/questions";

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
		case ADD_QUESTION_ANSWER:
			// poor object structuring on my part, TODO: refactor
			const { answer } = action;
			const { qid, authedUser } = answer;
			const choice = answer.answer;

			return {
				...state,
				// find the qid of the answered question
				[qid]: {
					// include the previous contents of the question that's been answered
					...state[qid],
					// optionOne or optionTwo
					[choice]: {
						// keep the previous properties (votes and text)
						...state[qid][choice],
						// adjust votes to be the previous votes and concat the user that answered the question
						votes: state[qid][choice].votes.concat([authedUser])
					}
				}
			};
		default:
			return state;
	}
}
