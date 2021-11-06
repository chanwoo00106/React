import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Id from "./pages/Id";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/path/:id" element={<Id />} />
    </Routes>
  );
}

export default App;
