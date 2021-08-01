import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Example from './Example';

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
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/example" component={Example} />
    </div>
  );
}

export default App;
