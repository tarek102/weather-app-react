import React, { useState } from "react";
import axios from "axios";


function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=66fb58f8b9a599d14f93b88b7dc8876e'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Cairo</p>      
          </div>
          <div className="temp">
            <h1>60° F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">70°F</p>
            <p>Feels</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
