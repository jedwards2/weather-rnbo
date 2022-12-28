const Header = ({weatherData, location, handleSubmit, formData, setFormData}: any) => {
  const handleChange = (e: any, value: String) => {
    if (value === "city"){
        setFormData((prevData: any) => {
          return {
            ...prevData,
            city: e.target.value,
          }
        })
    } else {
      setFormData((prevData: any) => {
          return {
            ...prevData,
            state: e.target.value,
          }
      })
    }
  }

  return (
    <div id="header--div">
      <h1>Weather-RNBO</h1>
      <h3>{location.city}</h3>
      <h3>{location.state}</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" name="cityname" value={formData.city} onChange={(e) => handleChange(e, "city")}/>
        </label>
        <label>
          City:
          <input type="text" name="citystate" value={formData.state} onChange={(e) => handleChange(e, "state")}/>
        </label>

        <button>Submit</button>
      </form>
      <p>Temp: {weatherData.temp}</p>
      <p>Humidity: {weatherData.humidity}</p>
      <p>Wind Degree: {weatherData.wind_deg}</p>
      <p>Wind Speed: {weatherData.wind_speed}</p>
      <p>Wind Gust: {weatherData.wind_gust}</p>
    </div>
  )
}

export default Header;
