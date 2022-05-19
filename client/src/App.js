import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';
import Table from "./Table";


function App() {


  var weather = "";
  const apiKey = "c4ec368ac8a64c9697872654221805"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [location, setLocation] = useState({})


  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    e.preventDefault();
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


const weatherForecast = () => {
  if(!inputCity){
    alert("Enter location");
  }
  weather = "forecast";
}
const weatherCurrent = () => {
  if(!inputCity){
    alert("Enter location");
  }
  weather = "current";
}


const getWetherDetails = (cityName) => {

  if (!cityName) return
  const apiURL = "http://api.weatherapi.com/v1/"+weather+".json?key="+apiKey+"&q="+ cityName +"&days=1&aqi=no&alerts=no"
  axios.get(apiURL).then((res) => {
    setLocation(res.data.location)
    setData(res.data)
  }).catch((err) => {
    console.log("err", err)
  })
}
console.log(location);
useEffect(()=>{
  const request = {
    method: "POST",
    headers: { "content-Type" : "application/json"},
    body: JSON.stringify(location)
  }
fetch("http://localhost:7000/api/user/postData",request).then(res => console.log(res))},[location])
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <br />
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option onClick={weatherForecast} value="1">Forecast Weather</option>
              <option onClick={weatherCurrent} value="2">Current Weather</option>
            </select>
          <h1>{weather}</h1>
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weathorCity">
              {data?.location?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.current?.temp_c)).toFixed(2)}°C</h6>
          </div>
          <br />
          <Table/>
        </div>
      }

    </div>
  );
}

export default App;
