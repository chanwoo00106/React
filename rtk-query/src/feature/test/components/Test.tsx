import Loading from "../../../components/Loading";
import { useGetTestQuery } from "../store/test";

const Test = () => {
  const { data, isLoading } = useGetTestQuery("todos");

  if (isLoading) return <Loading />;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Test;
