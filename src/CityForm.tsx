const CityForm = ({formData, setFormData, handleSubmit}: any) => {
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
    <div>
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
    </div>
  )
}

export default CityForm;
