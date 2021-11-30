export const add = (data, setTodoList) => {
  setTodoList((oldTodoList) => ({
    id: oldTodoList.id + 1,
    todos: [
      ...oldTodoList.todos,
      {
        id: oldTodoList.id,
        todo: data,
      },
    ],
  }));
};

export const remove = (id, setTodoList) => {
  setTodoList((oldTodoList) => ({
    id: oldTodoList.id,
    todos: [...oldTodoList.todos.filter((i) => i.id !== id)],
  }));
};
