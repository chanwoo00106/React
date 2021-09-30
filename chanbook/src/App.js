import './App.css';
import { Contents } from './components/Contents';
import { Header } from './components/Header';
import { RightAside } from './components/RightAside';

function App() {
  return (
    <div className="App">
      <Header />
      <RightAside />
      <Contents />
    </div>
  );
}

export default App;
