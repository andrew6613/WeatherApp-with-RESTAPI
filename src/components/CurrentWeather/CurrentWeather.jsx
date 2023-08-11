import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  if (data !== null) {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="city">
            <p>{data.city}</p>
            <p>{data.weather[0].main}</p>
          </div>
          <img
            src={require(`../../assets/${data.weather[0].icon}.png`)}
            alt=""
          />
        </div>
        <div className="description">
          <div className="temperature">
            <p>{Math.floor(data.main.temp - 273)}°C</p>
          </div>
          <div className="details">
            <p>Feels like {Math.floor(data.main.feels_like - 273)}°C</p>
            <p>Wind {data.wind.speed} m/s</p>
            <p>Humidity {data.main.humidity}%</p>
            <p>Pressure 15hPa</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
