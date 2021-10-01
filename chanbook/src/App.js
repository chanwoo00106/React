import './App.css';
import { Contents } from './components/Contents';
import { Header } from './components/Header';
import News from './components/News';
import { RightAside } from './components/RightAside';

function App() {
  return (
    <div className="App">
      <Header />
      <RightAside />
      <Contents />
      <News />
    </div>
  );
}

export default App;
