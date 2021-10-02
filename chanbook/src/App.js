import './App.css';
import { Contents } from './components/Contents';
import { Header } from './components/Header';
import { RightAside } from './components/RightAside';
import { Message } from './components/Message';
import { WritePopup } from './components/WritePopup';

function App() {
  document.querySelector('body').style.overflow = 'hidden'
  return (
    <div className="App">
      <WritePopup />
      <Header />
      <div className="header-wrap"></div>
      <RightAside />
      <Contents />
      <Message />
    </div>
  );
}

export default App;
