import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Example from './Example';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/example">test</Link>
        </li>
        <li>
          <Link to="/profile/teemo">Teemo</Link>
        </li>
        <li>
          <Link to="/profile/chan">chanwoo</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path={["/example", "/info"]} component={Example} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
