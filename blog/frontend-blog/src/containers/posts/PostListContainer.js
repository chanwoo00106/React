import React, { useEffect } from 'react';
import qs from 'qs';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';

export default function PostListContainer() {
  const params = useParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['post/LIST_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const { username } = params;
    const { tag, page } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, params]);

  return (
    <PostList
      posts={posts}
      loading={loading}
      error={error}
      showWriteButton={user}
    />
  );
}
