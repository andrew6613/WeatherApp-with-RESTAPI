import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  if (data) {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="city">
            <p>{data.city}</p>
            <p>
              {data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)}
            </p>
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
            <p>Ощущается как: {Math.floor(data.main.feels_like - 273)}°C</p>
            <p>Ветер: {data.wind.speed} м/с</p>
            <p>Влажность: {data.main.humidity}%</p>
            <p>Давление: {Math.floor(data.main.pressure * 0.75)} мм.рт.ст.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CurrentWeather;
