import { applyMiddleware, createStore, compose } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);
