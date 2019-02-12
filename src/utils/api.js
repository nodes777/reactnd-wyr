import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([getUsers(), _getQuestions()]).then(
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
    console.log(users);
    return users;
  });
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
