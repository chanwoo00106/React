import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "./Atom";
import { add, remove } from "./todo";

function App() {
  const [input, setInput] = useState("");
  const { todos } = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const onSubmit = (e) => {
    e.preventDefault();
    add(input, setTodoList);
    setInput("");
  };

  const onDoubleClick = (id) => remove(id, setTodoList);

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
            <li onDoubleClick={() => onDoubleClick(i.id)} key={i.id}>
              {i.todo}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
