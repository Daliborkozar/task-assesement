import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const composeEnheancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  product: productReducer,
});

export const store = createStore(
  reducer,
  composeEnheancer(applyMiddleware(thunk))
);
