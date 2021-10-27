import { call, put, takeEvery } from "redux-saga/effects";
import { set, status } from "../modules/github";
import { getGithub } from "./api";

function* getSaga(action) {
  try {
    const res = yield call(getGithub, action.id);
    yield put(set(res.data));
  } catch (e) {
    yield put(status(e.response.status));
  }
}

function* rootSaga() {
  yield takeEvery("GET", getSaga);
}

export default rootSaga;
