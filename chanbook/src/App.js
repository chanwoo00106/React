import React, { useState } from 'react';
import './App.css';
import { Contents } from './components/Contents';
import { Header } from './components/Header';
import { RightAside } from './components/RightAside';
import { Message } from './components/Message';
import { WritePopup } from './components/WritePopup';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
    if (toggle) document.querySelector('body').style.overflow = 'visible';
    else document.querySelector('body').style.overflow = 'hidden';
    dispatch({})
  }

  return (
    <div className="App">
      {toggle && <WritePopup onClick={onClick} />}
      <Header />
      <div className="header-wrap"></div>
      <RightAside />
      <Contents onClick={onClick} />
      <Message />
    </div>
  );
}

export default App;
