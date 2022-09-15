import { useMutation } from "@hooks";
import Todo from "./types/Todo";

function App() {
  const [mutation, { data, isLoading }] = useMutation<Todo[]>({
    method: "get",
    url: "/",
  });

  mutation();

  return <div></div>;
}

export default App;
