import React from 'react';
import './App.css';
import { Contents } from './components/Contents';
import { Header } from './components/Header';
import { RightAside } from './components/RightAside';
import { Message } from './components/Message';
import { WritePopup } from './components/WritePopup';
import { useDispatch, useSelector } from 'react-redux';
import { addNews, Toggle } from './modules/news';

function App() {
  const dispatch = useDispatch();
  const {toggle} = useSelector(state => ({toggle: state.News.toggle}))
  const onClick = (name, text, imgUrl, userImg) => {
    if (text){
      dispatch(addNews(name, text, imgUrl, userImg));
    }
    dispatch(Toggle())
    if (toggle) document.querySelector('body').style.overflow = 'visible';
    else document.querySelector('body').style.overflow = 'hidden';
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
