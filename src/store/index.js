import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import postsReducer from "./posts/reducer";
const reducers = combineReducers({ posts: postsReducer });
export default createStore(reducers, applyMiddleware(reduxThunk));
