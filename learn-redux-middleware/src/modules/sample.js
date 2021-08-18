import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import produce from 'immer';


// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
// 시작, 성공, 실패

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성합니다.
// thunk 함수 내부에서는 시작할 때, 실패했을 때 다른 액션을 디스패치합니다.

export const getPost = id => async dispatch => {
    dispatch({type: GET_POST}); // 요청 시작한 것을 알림
    try {
        const response = await api.getPost(id);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: response.data
        }); // 요청 성공
    } catch(e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
    }
}

export const getUsers = id => async dispatch => {
    dispatch({type: GET_USERS}); // 요청 시작한 것을 알림
    try {
        const response = await api.getUsers(id);
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        }); // 요청 성공
    } catch(e) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true
        });
        throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
    }
}

const iniitialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST]: state =>
            produce(state, draft => {
                draft.loading.GET_POST = true // 요청 시작
            }),
        [GET_POST_SUCCESS]: (state, action) => 
            produce(state, draft => {
                draft.loading.GET_POST = false // 요청 완료
                draft.post = action.payload
            }),
        [GET_POST_FAILURE]: (state, action) => 
            produce(state, draft => {
                draft.loading.GET_POST = false // 요청 완료
            }),

        [GET_USERS]: state =>
            produce(state, draft => {
                draft.loading.GET_USERS = true // 요청 시작
            }),
        [GET_USERS_SUCCESS]: (state, action) => 
            produce(state, draft => {
                draft.loading.GET_USERS = false // 요청 완료
                draft.users = action.payload
            }),
        [GET_USERS_FAILURE]: (state, action) => 
            produce(state, draft => {
                draft.loading.GET_USERS = false // 요청 완료
            }),
    },
    iniitialState
)

export default sample;
