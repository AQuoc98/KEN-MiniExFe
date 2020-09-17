import { combineReducers } from "redux";
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
  hobbyReducer,
});

export default rootReducer;
