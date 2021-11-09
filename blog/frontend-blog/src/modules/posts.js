import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POST, LIST_POST_SUCCESS, LIST_POST_FAILURE] =
  createRequestActionTypes('posts/LIST_POST');

export const listPosts = createAction(LIST_POST, ({ tag, username, page }) => ({
  tag,
  username,
  page,
}));

const listPostsSaga = createRequestSaga(LIST_POST, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POST, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_POST_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.header['last-page'], 10),
    }),
    [LIST_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
