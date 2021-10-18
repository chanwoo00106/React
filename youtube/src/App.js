import React from 'react';
import { Route } from 'react-router-dom'
import { Main } from './page/Main';
import { Quest } from './page/Quest';

function App() {
  return (
    <div>
      
      <Route path="/" exact component={Main}/>
      <Route path="/quest" component={Quest} />
    </div>
  );
}

export default App;
