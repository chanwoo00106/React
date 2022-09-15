import { useMutation } from "@hooks";
import { useEffect } from "react";
import Todo from "./types/Todo";
import { useForm } from "react-hook-form";

type FormValues = { todo: string };

function App() {
  const { handleSubmit, register } = useForm<FormValues>();
  const [getTodo, { data }] = useMutation<Todo[]>({
    method: "get",
    url: "/",
  });
  const [addTodo] = useMutation({ method: "post", url: "/" });

  useEffect(() => {
    getTodo();
  }, []);

  const onSubmit = async (form: FormValues) => {
    await addTodo({ ...form, id: data!.length + 1, checked: false });
    getTodo();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("todo", { required: true })} />
        <button type="submit">submit</button>
      </form>
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
