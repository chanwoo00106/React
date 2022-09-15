import { useMutation } from "@hooks";
import { useEffect } from "react";
import Todo from "./types/Todo";

function App() {
  const [mutation, { data }] = useMutation<Todo[]>({
    method: "get",
    url: "/",
  });

  useEffect(() => {
    mutation();
  }, []);

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li
            style={{ textDecoration: todo.checked ? "line-through" : "none" }}
            key={todo.id}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
