import { Suspense } from 'react'
import PostList from '../components/PostList'
import { fetchPostList } from '../services/postsService'

function MainPage() {
  const posts = fetchPostList()

  return (
    <Suspense fallback={'...loading'}>
      <PostList posts={posts} />
    </Suspense>
  )
}

export default MainPage
