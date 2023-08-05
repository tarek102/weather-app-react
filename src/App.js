import React, { useState } from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=66fb58f8b9a599d14f93b88b7dc8876e`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(api)
      .then(response => {
        setData(response.data)
        console.log(response.data);
      }) 
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search-box">
        <input 
        value={location}
        placeholder="Search location"
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>      
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.floor(data.main.temp - 273.15)}° C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{Math.floor(data.main.feels_like - 273.15)}° C</p> : null}
            <p>Feels</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind? <p className="bold">{data.wind.speed}MPH</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
