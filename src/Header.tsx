import CityForm from "./CityForm"


const Header = ({weatherData, location, handleCitySubmit, formData, setFormData, coordFormData}: any) => {


  return (
    <div id="header--div">
      <h3>Weather-RNBO</h3>
      <h4>{location.city}</h4>
      <h4>{location.state}</h4>
      {/* <CoordForm handleSubmit={handleSubmit} coordFormData={formData} setCoordForm={setFormData}/> */}
      <CityForm handleCitySubmit={handleCitySubmit} formData={formData} setFormData={setFormData}/>
      <p>Temp: {weatherData.temp}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind Degree: {weatherData.wind_deg}</p>
      <p>Wind Speed: {weatherData.wind_speed}</p>
      <p>Wind Gust: {weatherData.wind_gust}</p>
    </div>
  )
}

export default Header;
