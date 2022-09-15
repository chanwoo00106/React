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
  const [check] = useMutation({ method: "patch", url: "/" });

  useEffect(() => {
    getTodo();
  }, []);

  const onSubmit = async (form: FormValues) => {
    await addTodo({ ...form, id: data!.length, checked: false });
    await getTodo();
  };

  const onClick = async (id: number) => {
    await check({ id });
    await getTodo();
    console.log(data);
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
            onClick={() => onClick(todo.id)}
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
