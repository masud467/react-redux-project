import { combineReducers } from "redux";
import todoReducer from "../redux/todos/reducer";
import filterReducer from "../redux/filters/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
