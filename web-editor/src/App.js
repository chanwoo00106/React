import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Editor from "./components/Editor";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1 className="title">Text Editor</h1>
      <Routes>
        <Route
          path="/edit"
          element={<Editor data={data} setData={setData} />}
        />
        <Route path="/" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
