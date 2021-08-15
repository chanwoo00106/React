import React from "react";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
