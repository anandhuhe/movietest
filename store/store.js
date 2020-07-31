import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import moviesReducer from "./reducers/moviesReducer";

const middleweres = [thunk];

const reducers = combineReducers({
  movies: moviesReducer,
});

const store = createStore(reducers, compose(applyMiddleware(...middleweres)));
export default store;
