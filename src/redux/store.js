import { legacy_createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { myReducer } from "./myReducer";

 export const store = legacy_createStore(myReducer ,applyMiddleware(thunk,logger))