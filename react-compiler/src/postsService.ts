import axios from "axios";

export const fetchPostList = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data;
};
