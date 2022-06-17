import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/rootReducer";
import reduxThunk from "redux-thunk";
import reducerCombine from "../reducers/reducersCombine";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const reducers = reducerCombine;
const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)));

export default store;
