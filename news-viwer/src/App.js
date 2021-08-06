import React from 'react';
import { Route } from 'react-router-dom';
import NewPage from './pages/NewPage';


function App() {
  // category 뒤에 있는 ?는 값이 선택적이라는 의미
  return <Route path="/:category?" component={NewPage} />
}

export default App;
