import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export const receiveQuestions = questions => {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
};

const addQuestion = question => {
	return {
		type: ADD_QUESTION,
		question
	};
};

// actions go to all reducers
const addQuestionAnswer = answer => {
	return {
		type: ADD_QUESTION_ANSWER,
		answer
	};
};

export function handleAddQuestion(info) {
	return (dispatch, getState) => {
		//const { authedUser } = getState()

		dispatch(showLoading());
		return (
			saveQuestion(info)
				.then(question => {
					dispatch(addQuestion(question));
				})
				// show and hiding the loading bar prevents the redirect to home. Why?
				.then(() => dispatch(hideLoading()))
		);
	};
}

export function handleAddQuestionAnswer(info) {
	return (dispatch, getState) => {
		dispatch(showLoading());
		return saveQuestionAnswer(info)
			.then(() => {
				dispatch(addQuestionAnswer(info));
			})
			.then(() => dispatch(hideLoading()));
	};
}
