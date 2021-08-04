import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setData(res.data);
    }catch(e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      </div>
    </div>
  );
}

export default App;
