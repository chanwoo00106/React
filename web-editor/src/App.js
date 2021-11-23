import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="App">
      <h1 className="title">Text Editor</h1>
      <Editor value={value} setValue={setValue} />
    </div>
  );
}

export default App;
