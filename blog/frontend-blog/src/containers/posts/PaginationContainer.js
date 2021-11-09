import React from 'react';
import Pagination from '../../components/posts/Pagination';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function PaginationContainer() {
  const { username } = useParams();
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  const { tag, page = 1 } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
}
