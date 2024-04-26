import httpClient from "./httpClient";
import PostsResponseDto from "../dto/PostResponseDto";

const fetchPosts = async () => {
  const { data } = await httpClient.get<PostsResponseDto>("/posts");

  return data;
};

export default fetchPosts;
