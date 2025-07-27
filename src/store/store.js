import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

export const myStore = createStore(reducer);
