import Modal from "./Modal";
import Portal from "./Portal";

function App() {
  return (
    <div className="App">
      <Portal>
        <Modal />
      </Portal>
    </div>
  );
}

export default App;
