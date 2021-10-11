import './App.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import { useEffect, useState } from 'react';
import produce from 'immer';
import dotenv from "dotenv";
dotenv.config();

const initialState = [
  {
    id: 1,
    state: 'Gwangju',
    data: null
  },
  {
    id: 2,
    state: 'Seoul',
    data: null
  }
]

function App() {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(initialState);
    setError(null);
    setLoading(true);
    async function get() {
      try {
        data.forEach(async (d, i) => {
          console.log(d.state)
          await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${d.state}&appid=${process.env.REACT_APP_API_KEY}`
          ).then(async response => {
            console.log(response.data)
            await setData(produce(data, draft => {
              draft[i].data = response.data
            }));
            console.log(data);
          })
        })
      } catch (e) {
        setError(e);
      }
    }
    get();
    setLoading(false);
  }, []);


  if (loading) return <div>로딩중..</div>;
  else if (error) return <div>에러가 발생했습니다</div>;
  else if (data[1].data === null || data[0].data === null) return null;

  else {
    console.log(data)
    return (
      <div className="App">
        {data.map(i => (
          <WeatherCard key={i.id} data={i.data} />
        ))}
      </div>
    );
  }
}

export default App;
