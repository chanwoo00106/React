import Loading from "../../../components/Loading";
import { useGetTestQuery } from "../store/test";

const Test = () => {
  const { data, isLoading } = useGetTestQuery("todos");

  return (
    <Loading isLoading={isLoading}>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Loading>
  );
};

export default Test;
