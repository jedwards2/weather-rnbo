const Header = ({weatherData}: any) => {
  return (
    <div id="header--div">
      <h1>Weather-RNBO</h1>
      <p>Temp: {weatherData.temp}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind Degree: {weatherData.wind_deg}</p>
      <p>Wind Speed: {weatherData.wind_speed}</p>
      <p>Wind Gust: {weatherData.wind_gust}</p>
    </div>
  )
}

export default Header;
