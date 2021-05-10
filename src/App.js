import Header from './components/Header';
import Image from './components/Image'
import {BrowserRouter, Route, Switch  } from 'react-router-dom';
import NameList from './components/NameList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NameList />
        <Switch>

          <Route exact path="/">
            
          </Route>
          <Route path="/:num">
            <Image />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
