import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth'

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionType(
    'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login

export const register = createAction(REGISTER, ({ username, password }) => ({
    username,
    password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    }
}

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value; // 예: state.register.username을 바꾼다.
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        })
    },
    initialState,
);

export default auth;