import React, { useEffect, useState } from "react";
import DayForecast from "../OneDayForecast/DayForecast";

const Daily = ({ data }) => {
  const days = [
    { name: "Sunday", id: 0, weather: [] },
    { name: "Monday", id: 1, weather: [] },
    { name: "Tuesday", id: 2, weather: [] },
    { name: "Wednsday", id: 3, weather: [] },
    { name: "Thursday", id: 4, weather: [] },
    { name: "Friday", id: 5, weather: [] },
    { name: "Saturday", id: 6, weather: [] },
  ];

  const [weekDays, setWeekDays] = useState(null);

  function slicingData(data) {
    let newDays = [...days];
    data.list.map((el) => {
      let date = new Date(el.dt_txt);
      for (let i = 0; i < 7; i++) {
        if (date.getDay() == newDays[i].id) {
          newDays[i].weather.push(el);
        }
      }
    });
    setWeekDays(newDays);
  }

  useEffect(() => {
    slicingData(data);
  }, [data]);

  return (
    <div>
      {days.map((day, idx) => (
        <div key={idx}>
          {weekDays && (
            <DayForecast day={day.name} dataPart={weekDays[idx].weather} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Daily;
