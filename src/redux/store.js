import { createStore, applyMiddleware, compose } from "redux";
import rootreducer from "./rootreducer";

const middleware = [];

const initialState = {};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
