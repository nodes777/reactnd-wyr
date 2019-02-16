import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  generateUID
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([getUsers(), getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
      loaded: true
    })
  );
}

function getUsers() {
  return _getUsers().then(users => {
    const allIds = Object.keys(users);
    users.allIds = allIds;
    return users;
  });
}

function getQuestions() {
  return _getQuestions().then(questions => {
    const allIds = Object.keys(questions);
    questions.allIds = allIds;
    return questions;
  });
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
