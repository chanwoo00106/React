import Header from './components/Header';
import Images from './components/Images'
import {BrowserRouter, Route, Switch  } from 'react-router-dom';
import NameList from './components/NameList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>

          <Route exact path="/">
            <NameList />
          </Route>
          <Route path="/:num">
            <div className="show_image">
              <NameList />
              <Images />
            </div>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
