import { combineReducers } from "redux";
import sample from "./sample";
import counter from "./counter";
import loading from "./loading";

const routReducer = combineReducers({
    counter,
    sample,
    loading
});

export default routReducer;