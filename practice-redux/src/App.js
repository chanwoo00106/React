import Header from './components/Header';
import { Button } from 'react-bootstrap';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="btn-field">
          <Button variant="outline-dark">Add Contact</Button>
        </div>
        <div className="contact">
          <ContactList />
        </div>
      </main>
    </div>
  );
}

export default App;
