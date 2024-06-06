import { Suspense } from 'react'
import PostList from './PostList'

function App() {
  return (
    <Suspense fallback={'...loading'}>
      <PostList />
    </Suspense>
  )
}

export default App
