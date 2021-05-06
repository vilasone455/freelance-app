import { createStore, combineReducers , applyMiddleware } from "redux";

import PostReducer from "../reducer/post/index";
import ServiceReducer from "../reducer/service/index";

import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
	PostReducer,
    ServiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = () => {
	 return	createStore(rootReducer , applyMiddleware(thunkMiddleware));
}

const rsStore = store()

export default rsStore