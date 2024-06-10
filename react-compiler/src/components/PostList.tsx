import { use } from 'react'
import Post from './Post'
import { PostType } from '../types/PostType'

interface Props {
  posts: Promise<PostType[]>
}

const PostList = ({ posts }: Props) => {
  const data = use(posts)

  return data.map((post) => <Post key={post.id} post={post} />)
}

export default PostList
