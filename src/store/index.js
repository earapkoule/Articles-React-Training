import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import popularPostsReducer from "./popularPosts/reducer";
const reducers = combineReducers({ popularPosts: popularPostsReducer });
export default createStore(reducers, applyMiddleware(reduxThunk));
