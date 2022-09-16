import { useState } from "react";
import List from "./List";

function App() {
  const [tasks /* setTasks */] = useState([
    { id: 1, title: "아무일도 하기 싫다" },
    { id: 2, title: "잠자기" },
  ]);

  return (
    <div>
      <div>Todo</div>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
