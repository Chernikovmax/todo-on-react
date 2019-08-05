import { combineReducers } from "redux";
import { tasksReducer } from "./todoList";

export const rootReducer = combineReducers({
  tasks: tasksReducer
});
