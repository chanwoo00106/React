import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Example from './Example';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path={["/example", "/info"]} component={Example} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({location}) => (
          <div>
            <h2>이페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )} />
      </Switch>
    </div>
  );
}

export default App;
