import { createStore, applyMiddleware, combineReducers } from "redux";
import {  formReducer,modelReducer } from "./reducer/index"

const reducers = combineReducers({
  models: modelReducer,
  forms: formReducer,
});


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
