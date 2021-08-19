import { combineReducers } from "redux";
import sample, {sampleSaga} from "./sample";
import counter, {counterSaga} from "./counter";
import loading from "./loading";
import { all } from "redux-saga/effects";

const routReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSata() {
    // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
    yield all([counterSaga(), sampleSaga()]);
}

export default routReducer;