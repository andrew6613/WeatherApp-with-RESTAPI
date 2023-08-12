import React from "react";
import "./HourForecast.css";

const HourForecast = ({ forecastData }) => {
  return (
    <div className="hf_wrapper">
      {forecastData.dt_txt.split(" ")[1].replace(/00:/, "")}
      <img
        src={require(`../../assets/${forecastData.weather[0].icon}.png`)}
        alt=""
      />
      <p>{Math.floor(forecastData.main.temp - 273)}°C</p>
      <p>{forecastData.wind.speed} м/с</p>
    </div>
  );
};

export default HourForecast;
