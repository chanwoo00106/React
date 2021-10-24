import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "./userApi";
import { set_user, GET_USER } from "../modules/user";

export function* userSaga() {
  try {
    const res = yield call(getUser);
    const data = res.data;
    yield put(set_user(data));
  } catch (e) {
    console.log(e);
  }
}

export function* watcherSaga() {
  yield takeLatest(GET_USER, userSaga);
}
