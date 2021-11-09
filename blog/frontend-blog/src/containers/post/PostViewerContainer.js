import React, { useEffect } from 'react';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { useNavigate } from 'react-router';
import { removePost } from '../../lib/api/posts';

export default function PostViewerContainer() {
  const navigate = useNavigate();
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

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
    ></PostViewer>
  );
}
