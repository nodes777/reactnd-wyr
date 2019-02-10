import { saveQuestion, saveQuestionAnswer, getQuestions } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

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

export function handleRecieveQuestions() {}
