import React from "react";
import "./App.css";
import { Contents } from "./components/Contents";
import { Header } from "./components/Header";
import { RightAside } from "./components/RightAside";
import { Message } from "./components/Message";
import { WritePopup } from "./components/WritePopup";
import { useSelector } from "react-redux";

function App() {
  const { toggle } = useSelector((state) => ({ toggle: state.News.toggle }));

  return (
    <div className="App">
      {toggle && <WritePopup />}
      <Header />
      <div className="header-wrap"></div>
      <RightAside />
      <Contents />
      <Message />
    </div>
  );
}

export default App;
