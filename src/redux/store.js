import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/rootReducer";
import reduxThunk from "redux-thunk";
import reducerCombine from "../reducers/reducersCombine";
import counterSlice from "../counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const reducers = reducerCombine;
// const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)));

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
