import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "./Atom";

function App() {
  const [input, setInput] = useState("");
  const { todos } = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => ({
      id: oldTodoList.id + 1,
      todos: [
        ...oldTodoList.todos,
        {
          id: oldTodoList.id,
          todo: input,
        },
      ],
    }));
    setInput("");
  };

  return (
    <div className="App">
      <h1>Recoil 연습</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="할일 입력"
        />
        <button>add</button>
        <ul>
          {todos.map((i) => (
            <li key={i.id}>{i.todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
