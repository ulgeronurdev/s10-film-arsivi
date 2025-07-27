import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

export const myStore = createStore(reducer, applyMiddleware(logger));
