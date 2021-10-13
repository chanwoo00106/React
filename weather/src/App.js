import './App.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import { useEffect, useState } from 'react';
import dotenv from "dotenv";
dotenv.config();

const stateList = ['Gwangju', 'Seoul']

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    async function get() {
      try {
        stateList.forEach(async (state, i) => {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${process.env.REACT_APP_API_KEY}`);
          setData([
            {
              id: i,
              data: res.data,
            },
            ...data
          ])
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
  else if (data === []) return null;

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
