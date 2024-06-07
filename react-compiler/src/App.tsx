import { Suspense } from 'react'
import PostList from './PostList'
import { fetchPostList } from './postsService'

function App() {
  const posts = fetchPostList()

  return (
    <Suspense fallback={'...loading'}>
      <PostList posts={posts} />
    </Suspense>
  )
}

export default App
