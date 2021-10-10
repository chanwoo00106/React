import './App.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import { useEffect, useState } from 'react';
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);
    const get = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Gwangju&appid=${process.env.REACT_APP_API_KEYAPI_KEY}`
        );
        setData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    get();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  else {
    return (
      <div className="App">
        <WeatherCard data={data} />
      </div>
    );
  }
}

export default App;
