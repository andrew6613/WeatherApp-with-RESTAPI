import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import SearchLocation from "./components/Search/SearchLocation";
import { API_key } from "./api";
import { useState } from "react";
import DayForecast from "./components/OneDayForecast/DayForecast";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [weatherForecast, setweatherForecast] = useState(null);

  const getLongLat = (searhValue) => {
    const [lon, lat] = searhValue.coordinates.split(" ");
    const getCurrentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru`
    );
    const getForecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru`
    );

    Promise.all([getCurrentWeather, getForecast]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeatherData({ city: searhValue.label, ...weatherResponse });
      setweatherForecast({ city: searhValue.label, ...forecastResponse });
    });
  };

  console.log(currentWeatherData, weatherForecast);
  return (
    <div className="App">
      <SearchLocation getCoordinates={getLongLat} />
      <CurrentWeather data={currentWeatherData} />
      {weatherForecast && (
        <DayForecast data={weatherForecast.list.slice(0, 4)} day={"Saturday"} />
      )}
      {weatherForecast && (
        <DayForecast data={weatherForecast.list.slice(4, 12)} day={"Sunday"} />
      )}
      {weatherForecast && (
        <DayForecast data={weatherForecast.list.slice(12, 20)} day={"Monday"} />
      )}
      {weatherForecast && (
        <DayForecast
          data={weatherForecast.list.slice(20, 28)}
          day={"Tuesday"}
        />
      )}
      {weatherForecast && (
        <DayForecast
          data={weatherForecast.list.slice(28, 36)}
          day={"Wednsday"}
        />
      )}
      {weatherForecast && (
        <DayForecast
          data={weatherForecast.list.slice(36, 40)}
          day={"Thursday"}
        />
      )}
    </div>
  );
}

export default App;
