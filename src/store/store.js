import { combineReducers, compose, createStore } from "redux";
import reducerMessages from "./messages/reducerMessages";

const rootReducer = combineReducers({
  messages: reducerMessages,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, compose(devTools));
