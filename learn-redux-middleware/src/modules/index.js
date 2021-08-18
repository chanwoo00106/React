import { combineReducers } from "redux";
import sample from "./sample";
import counter from "./counter";

const routReducer = combineReducers({
    counter,
    sample
});

export default routReducer;