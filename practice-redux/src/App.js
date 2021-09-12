import Header from './components/Header';
import { Button } from 'react-bootstrap';
import './App.css';
import ContactList from './components/ContactList';
import {Switch, Route, useHistory} from 'react-router-dom'
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  const history = useHistory();

  const onClick = () => history.push('/add');

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <main>
            <div className="btn-field">
              <Button onClick={onClick} variant="outline-dark">Add Contact</Button>
            </div>
            <div className="contact">
              <ContactList />
            </div>
          </main>
        </Route>
        <Route path="/add">
          <>
            <Add />
          </>
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
