import { use } from 'react'
import Post from './Post'
import { fetchPostList } from './postsService'

const PostList = () => {
  const posts = use(fetchPostList())

  return posts.map((post) => <Post key={post.id} post={post} />)
}

export default PostList
