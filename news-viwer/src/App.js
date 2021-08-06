import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';


function App() {
  // category 뒤에 있는 ?는 값이 선택적이라는 의미
  return <Route path="/:category?" component={NewsPage} />
}

export default App;
