import { PostType } from '../types/PostType'

interface Props {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
