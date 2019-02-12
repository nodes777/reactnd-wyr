// index.js is the default that combineReducers looks for when pointing to a folder
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer
});
