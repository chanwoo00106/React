import React, { useEffect } from 'react';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function PostViewerContainer() {
  const params = useParams();
  const { postId } = params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error}></PostViewer>;
}
