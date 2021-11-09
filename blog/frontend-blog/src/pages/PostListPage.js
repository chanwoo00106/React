import React from 'react';
import HeaderContainer from '../components/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';

export default function PostListPage() {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
    </div>
  );
}
