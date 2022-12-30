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

  const [formData, setFormData] = useState({
    city: "",
    state: "",
  })

  const [location, setLocation] = useState({
    city: "Cambridge",
    state: "MA",
    lat: 44.34,
    lon: 10.99
  })

  const parseData = (data: any) => {
    if (!data.main){
      return;
    }
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

  const getLocation = async () => {
    const request = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${formData.city},${formData.state}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    const response = await request.json();
    setLocation({
      city: response[0].city,
      state: response[0].state,
      lat: response[0].lat,
      lon: response[0].lon,
    })
  }

  const fetchUsers = async () => {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`)
      const response = (await request.json())
      parseData(response);
  }

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    getLocation();
    setFormData({
      city: "",
      state: ""
    })

  }

  useEffect(() => {
    setInterval(fetchUsers, 60000);
  })

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div className="App">
      <Header weatherData={weatherData} location={location} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
      <Content />
    </div>
  );
}

export default App;
