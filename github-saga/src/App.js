import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get } from "./modules/github";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [id, setId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(get(id));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </form>
      {data && (
        <>
          <h1>{data.login}</h1>
          <p>{data.name}</p>
          <p>{data.company ? data.company : ""}</p>
        </>
      )}
    </div>
  );
}

export default App;
