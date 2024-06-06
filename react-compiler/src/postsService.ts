import axios from 'axios'
import { PostType } from './PostType'

export const fetchPostList = async () => {
  const { data } = await axios.get<PostType[]>(
    'https://jsonplaceholder.typicode.com/posts',
  )
  return data
}
