const Header = ({weatherData}: any) => {
  return (
    <div id="header--div">
      <h1>Weather-RNBO</h1>
      <p>{weatherData.wind_gust}</p>
    </div>
  )
}

export default Header;
