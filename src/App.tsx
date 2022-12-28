import {useState, useEffect} from "react"
import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({
    temp: 200,
    humidity: 93,
    wind_deg: 54,
    wind_gust:  1.08,
    wind_speed: 0.98,
  })

  const [location, setLocation] = useState({
    lat: 44.34,
    lon: 10.99
  })

  const parseData = (data: any) => {
    let tempData = data.main;
    let windData = data.wind;
    setWeatherData((prevData) => {return {
      ...prevData,
      temp: tempData.temp,
      humidity: tempData.humidity,
      wind_speed: windData.speed,
      wind_gust: windData.gust,
      wind_deg: windData.deg,
    }})
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`)
      const response = (await request.json())
      parseData(response);
    }

    fetchUsers()
  })

  return (
    <div className="App">
      <Header weatherData={weatherData}/>
      <Content />
    </div>
  );
}

export default App;
