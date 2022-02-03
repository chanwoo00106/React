import React from "react";
import { Route } from "react-router-dom";
import { Main } from "./page/Main";
import { Quest } from "./page/Quest";
import { Subscribe } from "./page/Subscribe";

function App() {
  return (
    <div>
      <Route path="/" exact component={Main} />
      <Route path="/quest" component={Quest} />
      <Route path="/subscribe" component={Subscribe} />
    </div>
  );
}

export default App;
