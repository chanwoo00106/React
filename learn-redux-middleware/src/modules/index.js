import { combineReducers } from "redux";
import counter from "./counter";

const routReducer = combineReducers({
    counter
});

export default routReducer;