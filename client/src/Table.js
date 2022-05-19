import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


export const Table = () => {
const [docdata,setDocdata] = useState("");
const [data, setData] = useState("");
useEffect(() => {
  fetch("http://localhost:7000/api/user/getData").then(res => res.json()).then(data => setData({weatherData : data}));
},[]);

console.log(data);
// console.log(docdata.value);
  const weatherData = [
    {name: "New Delhi", 
    region: "Delhi", 
    country: "India",
    lat: 28.6,
    lon: 77.2,
    tz_id: "Asia/Kolkata",
    localtime: "2022-05-19 0:50"},
    {name: "New Delhi", 
    region: "Delhi", 
    country: "India",
    lat: 28.6,
    lon: 77.2,
    tz_id: "Asia/Kolkata",
    localtime: "2022-05-19 0:50"},
  ];

  const weatherForecast = [{
    sunrise: "05:29 AM",
    sunset: "07:08 PM",
    moonrise: "10:57 PM",
    moonset: "08:10 AM",
    moon_phase: "Waning Gibbous",
    moon_illumination: "71",
  },
  {
    sunrise: "05:29 AM",
    sunset: "07:08 PM",
    moonrise: "10:57 PM",
    moonset: "08:10 AM",
    moon_phase: "Waning Gibbous",
    moon_illumination: "71",
  }];

    const renderweatherforecast = (weatherForecast, index) =>{
        return(
          <tr key={index}>
            <td>{weatherForecast.sunrise}</td>
            <td>{weatherForecast.sunset}</td>
            <td>{weatherForecast.moonrise}</td>
            <td>{weatherForecast.moonset}</td>
            <td>{weatherForecast.moon_phase}</td>
            <td>{weatherForecast.moon_illumination}</td>
          </tr>
        )
    }
    const renderweather = (weatherData, index) =>{
      return(
        <tr key={index}>
          <td>{weatherData.name}</td>
          <td>{weatherData.region}</td>
          <td>{weatherData.country}</td>
          <td>{weatherData.lat}</td>
          <td>{weatherData.lon}</td>
          <td>{weatherData.tz_id}</td>
          <td>{weatherData.localtime}</td>
        </tr>
      )
  }
  return (
    <div>
        <h1>Current weather Table</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">region</th>
      <th scope="col">country</th>
      <th scope="col">lat</th>
      <th scope="col">lon</th>
      <th scope="col">tz_id</th>
      <th scope="col">localtime</th>
    </tr>
  </thead>
  <tbody>
    {weatherData.map(renderweather)}
  </tbody>
</table>
<br />
<h1>Forecast weather Table</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">sunrise</th>
      <th scope="col">sunset</th>
      <th scope="col">moonrise</th>
      <th scope="col">mmoonset</th>
      <th scope="col">moon_phase</th>
      <th scope="col">moon_illumination</th>
    </tr>
  </thead>
  <tbody>
  {weatherForecast.map(renderweatherforecast)}
  </tbody>
</table>

    </div>
  )
}

export default Table;