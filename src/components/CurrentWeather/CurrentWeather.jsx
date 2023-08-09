import React from "react";
import "./CurrentWeather.css";
import logo from "../../assets/10d.png";

const CurrentWeather = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="city">
          <p>London</p>
          <p>Rainy</p>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="description">
        <div className="temperature">
          <p>18°C</p>
        </div>
        <div className="details">
          <p>Feels like 22°C</p>
          <p>Wind 2 m/s</p>
          <p>Humidity 15%</p>
          <p>Pressure 15hPa</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
