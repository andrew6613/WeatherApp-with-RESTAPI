import React, { useState } from "react";
import "./DayForecast.css";
import HourForecast from "../HourForecast/HourForecast";

const DayForecast = ({ data, day }) => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="df_wrapper">
      <button className="df_head" onClick={() => clickHandler()}>
        {day}
      </button>
      <div className={`df_body_collapse${open ? "open" : ""}`}>
        <div className="df_body">
          {data.map((el, idx) => (
            <li key={idx}>{<HourForecast forecastData={el} />}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
