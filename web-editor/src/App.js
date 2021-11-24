import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Editor from "./components/Editor";
import View from "./components/View";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <Link to="/edit">
        <h1 className="title">Text Editor</h1>
      </Link>
      <Routes>
        <Route path="/" element={<View data={data} />} />
        <Route
          path="/edit"
          element={<Editor data={data} setData={setData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
