import { combineReducers } from "redux";
import userReducer from "./userReducer";
import reducer from "./rootReducer";

export default combineReducers({
  user: userReducer,
  counter: reducer,
});
