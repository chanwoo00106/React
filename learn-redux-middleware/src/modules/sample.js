import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from "../lib/createRequestSaga";
import produce from 'immer';


// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
// 시작, 성공, 실패

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 실패했을 때 다른 액션을 디스패치합니다.

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

const iniitialState = {
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) =>
            produce(state, draft => {
                draft.post = action.payload;
            }),
        [GET_USERS_SUCCESS]: (state, action) => 
            produce(state, draft => {
                draft.users = action.payload;
            })
    },
    iniitialState
)

export default sample;
