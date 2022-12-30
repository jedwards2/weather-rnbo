const Header = ({weatherData, location, handleSubmit, formData, setFormData}: any) => {

  const handleChange = (e: any, value: String) => {
    console.log(formData)
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
      <h3>Weather-RNBO</h3>
      <h4>{location.city}</h4>
      <h4>{location.state}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="label--div">
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={(e) => handleChange(e, "city")}/>
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={(e) => handleChange(e, "state")}/>
          </label>
        </div>

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
