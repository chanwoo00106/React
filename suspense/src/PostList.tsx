import { useSuspenseQuery } from "@tanstack/react-query";
import fetchPosts from "./services/fetchPosts";

const PostList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["post-list"],
    queryFn: fetchPosts,
  });

  return (
    <ul className="space-y-6 mx-12">
      {data.map((post) => (
        <li key={post.id} className="border border-black rounded-lg px-8 py-4">
          <h3 className="text-2xl">{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
