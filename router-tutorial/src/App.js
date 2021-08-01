import './App.css';
import {Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/example" component={Example} />
    </div>
  );
}

export default App;
