import { combineReducers } from "redux";
import TodoList from "../modules/todolist";

const rootReducer = combineReducers({
  TodoList,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
